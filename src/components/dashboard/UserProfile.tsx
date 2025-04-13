
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Camera, User, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface UserData {
  name: string;
  email: string;
  phone: string;
  location: string;
  farmType: string;
  bio: string;
}

const UserProfile = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState<UserData>({
    name: "John Kamau",
    email: "john.kamau@example.com",
    phone: "+254 712 345 678",
    location: "Nyeri County, Kenya",
    farmType: "Mixed Farming (Rice, Maize, Poultry)",
    bio: "Small-scale farmer with 5 years of experience, interested in modern farming techniques and sustainable agriculture practices."
  });
  
  const [formData, setFormData] = useState<UserData>({...userData});
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSave = () => {
    setUserData({...formData});
    setIsEditing(false);
    
    toast({
      title: "Profile Updated",
      description: "Your profile information has been saved successfully.",
    });
  };
  
  const handleCancel = () => {
    setFormData({...userData});
    setIsEditing(false);
  };
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row">
          {/* Avatar section */}
          <div className="flex flex-col items-center mb-6 md:mb-0 md:mr-8">
            <div className="relative">
              <Avatar className="h-24 w-24 border-2 border-tu-green-200">
                <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                <AvatarFallback className="bg-tu-green-600 text-2xl">
                  <User className="h-10 w-10" />
                </AvatarFallback>
              </Avatar>
              {isEditing && (
                <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full border border-gray-200 cursor-pointer">
                  <Camera className="h-4 w-4 text-tu-green-700" />
                </div>
              )}
            </div>
            
            {!isEditing ? (
              <Button 
                variant="outline" 
                className="mt-4" 
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </Button>
            ) : (
              <div className="flex gap-2 mt-4">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleCancel}
                >
                  Cancel
                </Button>
                <Button 
                  size="sm"
                  onClick={handleSave}
                >
                  <Save className="h-4 w-4 mr-1" />
                  Save
                </Button>
              </div>
            )}
          </div>
          
          {/* User information form */}
          <div className="flex-grow space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                {isEditing ? (
                  <Input 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                ) : (
                  <div className="py-2">{userData.name}</div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                {isEditing ? (
                  <Input 
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                ) : (
                  <div className="py-2">{userData.email}</div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                {isEditing ? (
                  <Input 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                ) : (
                  <div className="py-2">{userData.phone}</div>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                {isEditing ? (
                  <Input 
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                  />
                ) : (
                  <div className="py-2">{userData.location}</div>
                )}
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="farmType">Farm Type</Label>
              {isEditing ? (
                <Input 
                  id="farmType"
                  name="farmType"
                  value={formData.farmType}
                  onChange={handleInputChange}
                />
              ) : (
                <div className="py-2">{userData.farmType}</div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              {isEditing ? (
                <Textarea 
                  id="bio"
                  name="bio"
                  rows={3}
                  value={formData.bio}
                  onChange={handleInputChange}
                />
              ) : (
                <div className="py-2">{userData.bio}</div>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UserProfile;
