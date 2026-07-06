export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Modern, responsive web applications built with React, Next.js, Vue, Angular, and more. From landing pages to complex platforms.",
    icon: "globe",
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps for iOS and Android using React Native, Flutter, Swift, and Kotlin.",
    icon: "smartphone",
  },
  {
    id: "backend-api",
    title: "Backend & API Development",
    description:
      "Scalable server-side solutions with Node.js, Python, Go, Rust, Java, and .NET. REST and GraphQL APIs.",
    icon: "server",
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud",
    description:
      "CI/CD pipelines, containerization, cloud infrastructure on AWS, Azure, and GCP. Kubernetes orchestration.",
    icon: "cloud",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User-centered design with wireframing, prototyping, and usability testing. Figma and design systems.",
    icon: "palette",
  },
  {
    id: "custom-software",
    title: "Custom Software",
    description:
      "Tailored software solutions for unique business needs. Desktop apps, automation tools, and system integrations.",
    icon: "code",
  },
];
