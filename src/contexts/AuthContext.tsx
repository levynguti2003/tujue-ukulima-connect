
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useToast } from "@/hooks/use-toast";

interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  location?: string;
  farmType?: string;
  bio?: string;
  watchedVideos: string[];
  savedArticles: string[];
  createdAt: Date;
  avatarUrl?: string;
}

interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updateUserProfile: (userData: Partial<User>) => void;
  addWatchedVideo: (videoId: string) => void;
  addSavedArticle: (articleId: string) => void;
  removeSavedArticle: (articleId: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  // Check for existing user in localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setCurrentUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse stored user:', error);
        localStorage.removeItem('currentUser');
      }
    }
    setIsLoading(false);
  }, []);

  const saveUserToStorage = (user: User) => {
    localStorage.setItem('currentUser', JSON.stringify(user));
  };

  // Mock login - In real app would connect to backend
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Mock user database check
      const usersString = localStorage.getItem('users');
      const users = usersString ? JSON.parse(usersString) : [];
      
      const user = users.find((u: any) => u.email === email);
      
      if (!user) {
        throw new Error('User not found');
      }
      
      if (user.password !== password) {
        throw new Error('Invalid password');
      }
      
      // Remove password before storing in state/localStorage
      const { password: _, ...userWithoutPassword } = user;
      
      setCurrentUser(userWithoutPassword);
      saveUserToStorage(userWithoutPassword);
      
      toast({
        title: "Login Successful",
        description: `Welcome back, ${user.name}!`,
      });
      
    } catch (error: any) {
      toast({
        title: "Login Failed",
        description: error.message || "Something went wrong",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock register - In real app would connect to backend
  const register = async (name: string, email: string, password: string) => {
    try {
      setIsLoading(true);
      
      // Check if user already exists
      const usersString = localStorage.getItem('users');
      const users = usersString ? JSON.parse(usersString) : [];
      
      if (users.some((u: any) => u.email === email)) {
        throw new Error('Email already in use');
      }
      
      // Create new user
      const newUser = {
        id: `user_${Date.now()}`,
        name,
        email,
        password, // In real app, this would be hashed
        watchedVideos: [],
        savedArticles: [],
        createdAt: new Date(),
      };
      
      // Save to "database"
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      
      // Log user in (without password in state)
      const { password: _, ...userWithoutPassword } = newUser;
      setCurrentUser(userWithoutPassword);
      saveUserToStorage(userWithoutPassword);
      
      toast({
        title: "Registration Successful",
        description: `Welcome, ${name}!`,
      });
      
    } catch (error: any) {
      toast({
        title: "Registration Failed",
        description: error.message || "Something went wrong",
        variant: "destructive"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const updateUserProfile = (userData: Partial<User>) => {
    if (!currentUser) return;

    // Update user in state
    const updatedUser = { ...currentUser, ...userData };
    setCurrentUser(updatedUser);
    saveUserToStorage(updatedUser);

    // Update user in "database"
    const usersString = localStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const updatedUsers = users.map((user: any) => {
        if (user.id === currentUser.id) {
          return { ...user, ...userData, password: user.password };
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  const addWatchedVideo = (videoId: string) => {
    if (!currentUser) return;

    if (currentUser.watchedVideos.includes(videoId)) return;

    const updatedVideos = [...currentUser.watchedVideos, videoId];
    const updatedUser = { ...currentUser, watchedVideos: updatedVideos };

    setCurrentUser(updatedUser);
    saveUserToStorage(updatedUser);

    // Update user in "database"
    const usersString = localStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const updatedUsers = users.map((user: any) => {
        if (user.id === currentUser.id) {
          return { ...user, watchedVideos: updatedVideos };
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }
  };

  const addSavedArticle = (articleId: string) => {
    if (!currentUser) return;

    if (currentUser.savedArticles.includes(articleId)) return;

    const updatedArticles = [...currentUser.savedArticles, articleId];
    const updatedUser = { ...currentUser, savedArticles: updatedArticles };

    setCurrentUser(updatedUser);
    saveUserToStorage(updatedUser);

    // Update user in "database"
    const usersString = localStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const updatedUsers = users.map((user: any) => {
        if (user.id === currentUser.id) {
          return { ...user, savedArticles: updatedArticles };
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    toast({
      title: "Article Saved",
      description: "Article has been added to your bookmarks.",
    });
  };

  const removeSavedArticle = (articleId: string) => {
    if (!currentUser) return;

    const updatedArticles = currentUser.savedArticles.filter(id => id !== articleId);
    const updatedUser = { ...currentUser, savedArticles: updatedArticles };

    setCurrentUser(updatedUser);
    saveUserToStorage(updatedUser);

    // Update user in "database"
    const usersString = localStorage.getItem('users');
    if (usersString) {
      const users = JSON.parse(usersString);
      const updatedUsers = users.map((user: any) => {
        if (user.id === currentUser.id) {
          return { ...user, savedArticles: updatedArticles };
        }
        return user;
      });
      localStorage.setItem('users', JSON.stringify(updatedUsers));
    }

    toast({
      title: "Article Removed",
      description: "Article has been removed from your bookmarks.",
    });
  };

  const value = {
    currentUser,
    isAuthenticated: !!currentUser,
    isLoading,
    login,
    register,
    logout,
    updateUserProfile,
    addWatchedVideo,
    addSavedArticle,
    removeSavedArticle
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
