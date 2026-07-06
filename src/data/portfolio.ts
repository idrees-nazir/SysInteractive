export type Project = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  category: "web" | "mobile" | "backend" | "devops";
  link?: string;
};

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard.",
    thumbnail: "/images/portfolio/ecommerce.svg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    category: "web",
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker App",
    description:
      "Cross-platform mobile app with workout tracking, progress analytics, and social features.",
    thumbnail: "/images/portfolio/fitness.svg",
    tags: ["React Native", "Node.js", "MongoDB"],
    category: "mobile",
  },
  {
    id: "logistics-api",
    title: "Logistics API",
    description:
      "High-throughput REST API handling 10K+ requests/sec for a logistics company's fleet management.",
    thumbnail: "/images/portfolio/logistics.svg",
    tags: ["Go", "gRPC", "Redis", "Docker"],
    category: "backend",
  },
  {
    id: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "Real-time analytics dashboard with customizable widgets, data visualization, and role-based access.",
    thumbnail: "/images/portfolio/dashboard.svg",
    tags: ["React", "D3.js", "Python", "AWS"],
    category: "web",
  },
  {
    id: "banking-app",
    title: "Banking Mobile App",
    description:
      "Secure mobile banking application with biometric auth, transaction history, and bill payments.",
    thumbnail: "/images/portfolio/banking.svg",
    tags: ["Flutter", "Dart", "Firebase", "Kotlin"],
    category: "mobile",
  },
  {
    id: "ci-cd-pipeline",
    title: "Enterprise CI/CD Pipeline",
    description:
      "Automated build, test, and deployment pipeline reducing release cycles from weeks to hours.",
    thumbnail: "/images/portfolio/cicd.svg",
    tags: ["Kubernetes", "Terraform", "GitHub Actions", "AWS"],
    category: "devops",
  },
];
