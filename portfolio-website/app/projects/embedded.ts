export const embedded = [
  {
    title: "BisuConnect Webapp",
    description: "A social media platform for students built with JavaScript, PHP, and MySQL. Features include talent sharing, messaging, notifications, and campus organization updates.",
    technologies: ["JavaScript", "PHP", "MySQL", "Web Development"],
    category: "Web Application",
    image: "/api/placeholder/600/400",
    module: "full-stack",
    featured: false
  },
    {
    title: "Automated Plant Dispensing System",
    description: "As Project Lead, designed and implemented a 12-bin automated dispensing system with precision weight control. Architected the complete control system including RS485 servo motor control, RS232 load cell communication, and automated refill/dispensing logic with real-time feedback systems.",
    technologies: ["ESP32", "Arduino", "C++", "RS485", "RS232", "Load Cells", "Servo Motors", "PLC", "Control Systems"],
    category: "Industrial Automation",
    image: "/images/projects/stock-feeds/calibration.png",
    module: "embedded",
    featured: true
    },
  {
    title: "Reverse Vending Machine",
    description: "Collaborative project developing a reverse vending machine with reward system to encourage recycling using Arduino Mega and Orange Pi.",
    technologies: ["Arduino", "Orange Pi", "Sensors", "C++"],
    category: "Hardware Project",
    image: "/api/placeholder/600/400",
    module: "embedded",
    featured: false
  },
  {
    title: "Smart Greenhouse Controller",
    description: "An automated greenhouse system that monitors temperature, humidity, and soil moisture and adjusts irrigation and ventilation.",
    technologies: ["ESP32", "Soil Sensors", "MQTT", "C++"],
    category: "Embedded Systems",
    image: "/api/placeholder/600/400",
    module: "embedded",
    featured: false
  },
  {
    title: "Wearable Health Monitor",
    description: "A low-power wearable that tracks heart rate, activity, and sleep patterns and sends summarized data to a mobile dashboard.",
    technologies: ["nRF52", "BLE", "C", "Sensor Fusion"],
    category: "Embedded Systems",
    image: "/api/placeholder/600/400",
    module: "embedded",
    featured: false
  },
  {
    title: "Battery Management System (BMS)",
    description: "A compact BMS for Li-ion packs with cell balancing, SOC estimation, and protection features for small EVs and energy storage.",
    technologies: ["STM32", "ADC", "CAN", "C++"],
    category: "Embedded Systems",
    image: "/api/placeholder/600/400",
    module: "embedded",
    featured: false
  },
  {
    title: "LoRa Mesh Sensor Network",
    description: "A long-range low-power mesh network for environmental sensors with gateway integration to cloud dashboards.",
    technologies: ["LoRa", "Arduino", "MQTT", "Gateways"],
    category: "Embedded Systems",
    image: "/api/placeholder/600/400",
    module: "embedded",
    featured: false
  },
  {
    title: "Edge AI Camera",
    description: "An edge device running lightweight ML models to detect objects and events, optimized for low-latency inference.",
    technologies: ["ARM", "TensorFlow Lite", "OpenCV", "Python"],
    category: "Embedded Systems",
    image: "/api/placeholder/600/400",
    module: "embedded",
    featured: false
  },
  {
    title: "Smart Energy Meter",
    description: "A microcontroller-based energy meter with real-time power monitoring and cloud reporting for households.",
    technologies: ["ESP32", "CT Sensors", "MQTT", "MicroPython"],
    category: "Embedded Systems",
    image: "/api/placeholder/600/400",
    module: "embedded",
    featured: false
  },
  {
    title: "Autonomous Delivery Bot (Prototype)",
    description: "Prototype robot using sensors and basic SLAM for short-range indoor delivery tasks and path planning.",
    technologies: ["ROS", "LIDAR", "Motor Control", "C++"],
    category: "Robotics",
    image: "/api/placeholder/600/400",
    module: "embedded",
    featured: false
  },
  {
    title: "Industrial Sensor Gateway",
    description: "A robust gateway that aggregates industrial sensor data (Modbus/RS485) and forwards it securely to cloud services.",
    technologies: ["Modbus", "Linux", "Docker", "Go"],
    category: "Embedded Systems",
    image: "/api/placeholder/600/400",
    module: "embedded",
    featured: false
  },
  {
    title: "Brand Identity Design",
    description: "Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.",
    technologies: ["Adobe Illustrator", "Photoshop", "Branding", "Typography"],
    category: "Brand Identity",
    image: "/api/placeholder/600/400",
    module: "graphic-design",
    featured: false
  },
  {
    title: "UI/UX Dashboard",
    description: "Modern dashboard interface design with user experience focus, featuring data visualization and intuitive navigation.",
    technologies: ["Figma", "UI Design", "UX Research", "Prototyping"],
    category: "UI/UX Design",
    image: "/api/placeholder/600/400",
    module: "graphic-design",
    featured: false
  }
];

export function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^[-]+|[-]+$/g, '');
}

export default embedded;