import { 
  ChartBarIcon,
  CloudArrowUpIcon,
  SparklesIcon,
  UserGroupIcon 
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const services = [
  {
    title: "Agile Transformation",
    description: "Guide your organization through successful agile adoption. From team-level practices to scaled agile frameworks, I help establish agile mindsets and methodologies that work.",
    icon: UserGroupIcon,
  },
  {
    title: "DevOps Excellence",
    description: "Build high-performing engineering cultures with modern DevOps practices. Implement CI/CD, infrastructure as code, and monitoring solutions that enable rapid, reliable delivery.",
    icon: CloudArrowUpIcon,
  },
  {
    title: "AI Integration",
    description: "Navigate the AI transformation journey. From strategy to implementation, I help organizations leverage AI technologies effectively while maintaining engineering excellence.",
    icon: SparklesIcon,
  },
  {
    title: "Technology Leadership",
    description: "Strategic technology leadership to drive business outcomes. Build high-performing teams, establish technical vision, and align technology initiatives with business goals.",
    icon: ChartBarIcon,
  }
];

export default function Work() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-3xl font-bold mb-4">Technology Consulting Services</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Helping organizations navigate digital transformation through Agile methodologies, 
          DevOps practices, and AI integration.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <service.icon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-base text-gray-600 dark:text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-bold mb-6">My Approach</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-base">
            With over 15 years of experience in technology leadership, I bring a pragmatic 
            approach to digital transformation. I believe in:
          </p>
          <ul className="text-base">
            <li>Building sustainable practices that outlast my engagement</li>
            <li>Focusing on business outcomes while maintaining technical excellence</li>
            <li>Empowering teams through knowledge transfer and mentorship</li>
            <li>Creating measurable impact through data-driven decisions</li>
          </ul>
          <p className="mt-4">
            <Link 
              href="/work/people" 
              className="text-base text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              Learn more about my approach to people and leadership →
            </Link>
          </p>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Organization?</h2>
        <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
          Let's discuss how I can help you achieve your technology goals.
        </p>
        <a 
          href="mailto:aa@salvadore.me" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
} 