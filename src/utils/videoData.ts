
// Video data organized by categories

export interface VideoItem {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
  slug: string;
}

// Helper function to extract video ID from YouTube URL
export const extractYouTubeId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

// Helper function to get YouTube thumbnail from video ID
export const getYouTubeThumbnail = (videoId: string): string => {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
};

// Categories
export const videoCategories = [
  "All Categories",
  "Precision Agriculture",
  "Crop Production",
  "Animal Production",
  "Pest Control",
  "Smart Farming",
  "Drone Spraying",
  "Climate-Smart Agriculture",
  "Soil Health",
  "Rice Farming",
  "Big Data in Farming",
  "Satellite in Agriculture",
  "Vertical Hydroponics",
  "Renewable Energy",
  "Genetic Engineering",
  "AgroFinTech"
];

// Featured videos for the homepage
export const featuredVideos = [
  {
    id: 1,
    title: "Modern Drone Spraying Techniques",
    duration: "5:31",
    thumbnail: getYouTubeThumbnail("0XfFNPedsxE"),
    slug: "/videos/modern-drone-spraying-techniques",
    youtubeId: "0XfFNPedsxE"
  },
  {
    id: 2,
    title: "Precision Agriculture Technology",
    duration: "9:43",
    thumbnail: getYouTubeThumbnail("nXD5QRdgyCg"),
    slug: "/videos/precision-agriculture-technology",
    youtubeId: "nXD5QRdgyCg"
  },
  {
    id: 3,
    title: "Innovative Climate-Smart Rice Production",
    duration: "7:15",
    thumbnail: getYouTubeThumbnail("J_mMS3eBjTk"),
    slug: "/videos/climate-smart-rice-production",
    youtubeId: "J_mMS3eBjTk"
  },
  {
    id: 4,
    title: "Smart Irrigation Systems for Small Farms",
    duration: "6:45",
    thumbnail: getYouTubeThumbnail("Ulf8E1XnhgI"),
    slug: "/videos/smart-irrigation-systems",
    youtubeId: "Ulf8E1XnhgI"
  }
];

// Main video database
export const allVideos: VideoItem[] = [
  // Precision Agriculture
  {
    id: 101,
    title: "Modern Drone Spraying Techniques",
    description: "Learn how drone technology is revolutionizing crop spraying with precision and efficiency.",
    author: "Skyfield Aerotech",
    category: "Precision Agriculture",
    duration: "5:31",
    thumbnail: getYouTubeThumbnail("0XfFNPedsxE"),
    youtubeId: "0XfFNPedsxE",
    slug: "/videos/modern-drone-spraying-techniques"
  },
  {
    id: 102,
    title: "Precision Agriculture Technology",
    description: "Discover how precision agriculture is transforming farming with data-driven decision making.",
    author: "AgTech Kenya",
    category: "Precision Agriculture",
    duration: "9:43",
    thumbnail: getYouTubeThumbnail("nXD5QRdgyCg"),
    youtubeId: "nXD5QRdgyCg",
    slug: "/videos/precision-agriculture-technology"
  },
  {
    id: 103,
    title: "Sensors and IoT in Modern Farming",
    description: "See how sensors and Internet of Things devices help monitor and optimize farm conditions in real-time.",
    author: "Tech Farm Solutions",
    category: "Precision Agriculture",
    duration: "8:12",
    thumbnail: getYouTubeThumbnail("GXq1FfH9byM"),
    youtubeId: "GXq1FfH9byM",
    slug: "/videos/sensors-iot-modern-farming"
  },
  
  // Big Data in Farming
  {
    id: 201,
    title: "Big Data Revolution in Agriculture",
    description: "Understand how big data analytics is helping farmers make better decisions and increase productivity.",
    author: "Digital Farming Institute",
    category: "Big Data in Farming",
    duration: "10:15",
    thumbnail: getYouTubeThumbnail("_tijHjup-gM"),
    youtubeId: "_tijHjup-gM",
    slug: "/videos/big-data-revolution-agriculture"
  },
  {
    id: 202,
    title: "Data-Driven Farming Practices",
    description: "Learn practical approaches to implementing data-driven decision making on your farm.",
    author: "Smart Farm Academy",
    category: "Big Data in Farming",
    duration: "7:23",
    thumbnail: getYouTubeThumbnail("IkLJE2AkFuI"),
    youtubeId: "IkLJE2AkFuI",
    slug: "/videos/data-driven-farming-practices"
  },
  
  // Satellite in Agriculture
  {
    id: 301,
    title: "Satellite Imagery for Crop Monitoring",
    description: "Explore how satellite imagery helps monitor crop health, growth patterns and yield estimation.",
    author: "GeoAgri Solutions",
    category: "Satellite in Agriculture",
    duration: "9:06",
    thumbnail: getYouTubeThumbnail("Wczoc-oNOBY"),
    youtubeId: "Wczoc-oNOBY",
    slug: "/videos/satellite-imagery-crop-monitoring"
  },
  {
    id: 302,
    title: "Satellite Technology in Precision Farming",
    description: "How satellite technology integrates with on-farm systems for comprehensive agricultural monitoring.",
    author: "Space Agri Tech",
    category: "Satellite in Agriculture",
    duration: "11:32",
    thumbnail: getYouTubeThumbnail("YsN8ZscTnG4"),
    youtubeId: "YsN8ZscTnG4",
    slug: "/videos/satellite-technology-precision-farming"
  },
  
  // Vertical Hydroponics
  {
    id: 401,
    title: "Introduction to Vertical Hydroponics",
    description: "Learn the basics of vertical hydroponic farming systems and their benefits for urban agriculture.",
    author: "Future Farms",
    category: "Vertical Hydroponics",
    duration: "8:47",
    thumbnail: getYouTubeThumbnail("hCQHwimJFGM"),
    youtubeId: "hCQHwimJFGM",
    slug: "/videos/introduction-vertical-hydroponics"
  },
  {
    id: 402,
    title: "Building Small-Scale Hydroponic Systems",
    description: "Step-by-step guide to constructing your own affordable hydroponic system for vegetables.",
    author: "Urban Grower",
    category: "Vertical Hydroponics",
    duration: "12:54",
    thumbnail: getYouTubeThumbnail("LGF33NN4B8U"),
    youtubeId: "LGF33NN4B8U",
    slug: "/videos/building-small-scale-hydroponics"
  },
  
  // Renewable Energy
  {
    id: 501,
    title: "Solar Power Solutions for Farms",
    description: "Discover how solar energy can power farm operations and reduce dependence on grid electricity.",
    author: "Renewable Farm Energy",
    category: "Renewable Energy",
    duration: "9:32",
    thumbnail: getYouTubeThumbnail("lgZBlD-TCFE"),
    youtubeId: "lgZBlD-TCFE",
    slug: "/videos/solar-power-solutions-farms"
  },
  {
    id: 502,
    title: "Biogas Production from Farm Waste",
    description: "Learn how to convert agricultural waste into biogas for sustainable energy production.",
    author: "Bio Energy Solutions",
    category: "Renewable Energy",
    duration: "10:18",
    thumbnail: getYouTubeThumbnail("Vz11Xt-TxP4"),
    youtubeId: "Vz11Xt-TxP4",
    slug: "/videos/biogas-production-farm-waste"
  },
  
  // Crop Production
  {
    id: 601,
    title: "Advanced Maize Production Techniques",
    description: "Learn modern approaches to maize cultivation for improved yields and sustainability.",
    author: "Crop Experts Kenya",
    category: "Crop Production",
    duration: "15:23",
    thumbnail: getYouTubeThumbnail("mZgSeChDyaY"),
    youtubeId: "mZgSeChDyaY",
    slug: "/videos/advanced-maize-production"
  },
  {
    id: 602,
    title: "Wheat Farming Best Practices",
    description: "Comprehensive guide to wheat cultivation from seed selection to harvest.",
    author: "Grain Farming Institute",
    category: "Crop Production",
    duration: "12:48",
    thumbnail: getYouTubeThumbnail("SJv8bHTq4mU"),
    youtubeId: "SJv8bHTq4mU",
    slug: "/videos/wheat-farming-best-practices"
  },
  {
    id: 603,
    title: "Modern Rice Production Methods",
    description: "Innovative approaches to rice farming for optimal growth and higher yields.",
    author: "Rice Farmers Association",
    category: "Crop Production",
    duration: "11:37",
    thumbnail: getYouTubeThumbnail("J_mMS3eBjTk"),
    youtubeId: "J_mMS3eBjTk",
    slug: "/videos/modern-rice-production"
  },
  {
    id: 604,
    title: "Successful Potato Farming Techniques",
    description: "Complete guide to potato cultivation from planting to harvesting and storage.",
    author: "Root Crop Specialists",
    category: "Crop Production",
    duration: "13:52",
    thumbnail: getYouTubeThumbnail("p13FS2LXmC8"),
    youtubeId: "p13FS2LXmC8",
    slug: "/videos/potato-farming-techniques"
  },
  {
    id: 605,
    title: "Commercial Tomato Production",
    description: "Best practices for tomato cultivation with focus on disease management and quality produce.",
    author: "Vegetable Growing Experts",
    category: "Crop Production",
    duration: "14:05",
    thumbnail: getYouTubeThumbnail("FSFBPtRO4HU"),
    youtubeId: "FSFBPtRO4HU",
    slug: "/videos/commercial-tomato-production"
  },
  {
    id: 606,
    title: "Banana Plantation Management",
    description: "Complete guide to establishing and maintaining a banana plantation for optimal yields.",
    author: "Tropical Fruit Farmers",
    category: "Crop Production",
    duration: "16:28",
    thumbnail: getYouTubeThumbnail("If9U6ME3ycQ"),
    youtubeId: "If9U6ME3ycQ",
    slug: "/videos/banana-plantation-management"
  },

  // Animal Production
  {
    id: 701,
    title: "Modern Dairy Cattle Management",
    description: "Learn best practices for dairy cattle rearing, feeding, and milk production optimization.",
    author: "Livestock Experts Kenya",
    category: "Animal Production",
    duration: "18:35",
    thumbnail: getYouTubeThumbnail("OwNCbkIHBs4"),
    youtubeId: "OwNCbkIHBs4",
    slug: "/videos/dairy-cattle-management"
  },
  {
    id: 702,
    title: "Goat Farming for Beginners",
    description: "Getting started with goat farming: breeds, housing, feeding and healthcare basics.",
    author: "Small Livestock Institute",
    category: "Animal Production",
    duration: "14:23",
    thumbnail: getYouTubeThumbnail("JnkfnM9hP48"),
    youtubeId: "JnkfnM9hP48",
    slug: "/videos/goat-farming-beginners"
  },
  {
    id: 703,
    title: "Poultry Production: Layer Management",
    description: "Comprehensive guide to laying hen management for optimal egg production.",
    author: "Poultry Farming Association",
    category: "Animal Production",
    duration: "15:48",
    thumbnail: getYouTubeThumbnail("pMbS8h1b5nY"),
    youtubeId: "pMbS8h1b5nY",
    slug: "/videos/poultry-layer-management"
  },
  {
    id: 704,
    title: "Fish Farming in Ponds",
    description: "Learn how to establish and manage a profitable fish pond system.",
    author: "Aquaculture Specialists",
    category: "Animal Production",
    duration: "16:21",
    thumbnail: getYouTubeThumbnail("zzXmX_E7qWM"),
    youtubeId: "zzXmX_E7qWM",
    slug: "/videos/fish-farming-ponds"
  },
  {
    id: 705,
    title: "Beekeeping Basics for Honey Production",
    description: "Getting started with beekeeping: hive management, honey harvesting and colony care.",
    author: "Apiculture Experts",
    category: "Animal Production",
    duration: "13:57",
    thumbnail: getYouTubeThumbnail("LHBXmFU3vV0"),
    youtubeId: "LHBXmFU3vV0",
    slug: "/videos/beekeeping-basics"
  },
  {
    id: 706,
    title: "Rabbit Farming for Meat Production",
    description: "Complete guide to commercial rabbit farming for meat: breeds, housing, and management.",
    author: "Small Livestock Hub",
    category: "Animal Production",
    duration: "14:32",
    thumbnail: getYouTubeThumbnail("3CNwxQ_BISU"),
    youtubeId: "3CNwxQ_BISU",
    slug: "/videos/rabbit-farming"
  },

  // Soil Health
  {
    id: 801,
    title: "Understanding Soil Testing Results",
    description: "How to interpret soil test results and make informed decisions on amendments and fertilizers.",
    author: "Soil Science Institute",
    category: "Soil Health",
    duration: "12:48",
    thumbnail: getYouTubeThumbnail("wNKmHk-L2N0"),
    youtubeId: "wNKmHk-L2N0",
    slug: "/videos/soil-testing-interpretation"
  },
  {
    id: 802,
    title: "Natural Methods for Improving Soil Fertility",
    description: "Learn organic approaches to soil enrichment including cover crops, compost and green manures.",
    author: "Organic Farming Association",
    category: "Soil Health",
    duration: "10:35",
    thumbnail: getYouTubeThumbnail("SxJoOh4a0wM"),
    youtubeId: "SxJoOh4a0wM",
    slug: "/videos/natural-soil-fertility"
  },

  // Smart Farming
  {
    id: 901,
    title: "Smart Irrigation Systems for Small Farms",
    description: "How to implement affordable smart irrigation technology for water conservation and efficiency.",
    author: "Water Smart Agriculture",
    category: "Smart Farming",
    duration: "6:45",
    thumbnail: getYouTubeThumbnail("Ulf8E1XnhgI"),
    youtubeId: "Ulf8E1XnhgI",
    slug: "/videos/smart-irrigation-systems"
  },
  {
    id: 902,
    title: "Mobile Apps for Farm Management",
    description: "Review of essential smartphone applications that help with farm operations and recordkeeping.",
    author: "Digital Farm Solutions",
    category: "Smart Farming",
    duration: "7:24",
    thumbnail: getYouTubeThumbnail("Qmla9NLFBvU"),
    youtubeId: "Qmla9NLFBvU",
    slug: "/videos/mobile-apps-farm-management"
  },

  // Pest Control
  {
    id: 1001,
    title: "Integrated Pest Management for Crops",
    description: "Learn holistic approaches to pest control that reduce chemical use and emphasize prevention.",
    author: "IPM Specialists",
    category: "Pest Control",
    duration: "15:18",
    thumbnail: getYouTubeThumbnail("TwxfqD73WYo"),
    youtubeId: "TwxfqD73WYo",
    slug: "/videos/integrated-pest-management"
  },
  {
    id: 1002,
    title: "Common Crop Pests and Natural Controls",
    description: "Identifying major crop pests and biological control methods for sustainable management.",
    author: "Biological Control Institute",
    category: "Pest Control",
    duration: "13:42",
    thumbnail: getYouTubeThumbnail("0D--ltYWKXI"),
    youtubeId: "0D--ltYWKXI",
    slug: "/videos/crop-pests-natural-controls"
  },

  // AgroFinTech
  {
    id: 1101,
    title: "Digital Financial Services for Farmers",
    description: "How mobile money and digital financial tools are transforming rural agricultural financing.",
    author: "AgriFinance Solutions",
    category: "AgroFinTech",
    duration: "8:32",
    thumbnail: getYouTubeThumbnail("o-9QMk_m78U"),
    youtubeId: "o-9QMk_m78U",
    slug: "/videos/digital-financial-services-farmers"
  },
  {
    id: 1102,
    title: "Blockchain Applications in Agriculture",
    description: "Understanding how blockchain technology can improve traceability and market access for farmers.",
    author: "AgTech Innovations",
    category: "AgroFinTech",
    duration: "10:15",
    thumbnail: getYouTubeThumbnail("nhn9H0yKjEg"),
    youtubeId: "nhn9H0yKjEg",
    slug: "/videos/blockchain-agriculture-applications"
  },

  // Genetic Engineering
  {
    id: 1201,
    title: "Understanding GMOs in Agriculture",
    description: "An objective look at genetically modified organisms and their role in modern agriculture.",
    author: "Agricultural Biotechnology Institute",
    category: "Genetic Engineering",
    duration: "14:28",
    thumbnail: getYouTubeThumbnail("CDw4WPng2iE"),
    youtubeId: "CDw4WPng2iE",
    slug: "/videos/understanding-gmos"
  },
  {
    id: 1202,
    title: "CRISPR Technology in Plant Breeding",
    description: "How gene editing is creating drought-resistant and disease-resistant crop varieties.",
    author: "Plant Genetics Research",
    category: "Genetic Engineering",
    duration: "12:15",
    thumbnail: getYouTubeThumbnail("Q18B3Cg5cGY"),
    youtubeId: "Q18B3Cg5cGY",
    slug: "/videos/crispr-plant-breeding"
  },

  // Climate-Smart Agriculture
  {
    id: 1301,
    title: "Adapting to Climate Change in Farming",
    description: "Practical strategies for farmers to adapt their practices to changing climate conditions.",
    author: "Climate Smart Farming",
    category: "Climate-Smart Agriculture",
    duration: "16:32",
    thumbnail: getYouTubeThumbnail("q7JnJ0oBa94"),
    youtubeId: "q7JnJ0oBa94",
    slug: "/videos/adapting-climate-change-farming"
  },
  {
    id: 1302,
    title: "Water Conservation in Changing Climate",
    description: "Techniques for efficient water use in increasingly drought-prone agricultural regions.",
    author: "Water Resource Management",
    category: "Climate-Smart Agriculture",
    duration: "11:45",
    thumbnail: getYouTubeThumbnail("KYeFNnPJVEg"),
    youtubeId: "KYeFNnPJVEg",
    slug: "/videos/water-conservation-changing-climate"
  },
  {
    id: 1303,
    title: "Carbon Sequestration in Agricultural Soils",
    description: "How farming practices can help capture carbon and mitigate climate change effects.",
    author: "Sustainable Agriculture Research",
    category: "Climate-Smart Agriculture",
    duration: "13:28",
    thumbnail: getYouTubeThumbnail("y1bhpy4volc"),
    youtubeId: "y1bhpy4volc",
    slug: "/videos/carbon-sequestration-agricultural-soils"
  }
];
