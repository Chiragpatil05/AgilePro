import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  Layout,
  Calendar,
  BarChart,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import CompanyCarousel from "@/components/company-carousel";
import Image from "next/image";

const faqs = [
  {
    question: "What is ZCRUM?",
    answer:
      "ZCRUM is a powerful project management tool designed to help teams organize, track, and manage their work efficiently. It combines intuitive design with robust features to streamline your workflow and boost productivity.",
  },
  {
    question: "How does ZCRUM compare to other project management tools?",
    answer:
      "ZCRUM offers a unique combination of intuitive design, powerful features, and flexibility. Unlike other tools, we focus on providing a seamless experience for both agile and traditional project management methodologies, making it versatile for various team structures and project types.",
  },
  {
    question: "Is ZCRUM suitable for small teams?",
    answer:
      "Absolutely! ZCRUM is designed to be scalable and flexible. It works great for small teams and can easily grow with your organization as it expands. Our user-friendly interface ensures that teams of any size can quickly adapt and start benefiting from ZCRUM's features.",
  },
  {
    question: "What key features does ZCRUM offer?",
    answer:
      "ZCRUM provides a range of powerful features including intuitive Kanban boards for visualizing workflow, robust sprint planning tools for agile teams, comprehensive reporting for data-driven decisions, customizable workflows, time tracking, and team collaboration tools. These features work seamlessly together to enhance your project management experience.",
  },
  {
    question: "Can ZCRUM handle multiple projects simultaneously?",
    answer:
      "Yes, ZCRUM is built to manage multiple projects concurrently. You can easily switch between projects, and get a bird's-eye view of all your ongoing work. This makes ZCRUM ideal for organizations juggling multiple projects or clients.",
  },
  {
    question: "Is there a learning curve for new users?",
    answer:
      "While ZCRUM is packed with features, we've designed it with user-friendliness in mind. New users can quickly get up to speed thanks to our intuitive interface, helpful onboarding process, and comprehensive documentation.",
  },
];

const features = [
  {
    title: "Intuitive Kanban Boards",
    description:
      "Visualize your workflow and optimize team productivity with our easy-to-use Kanban boards.",
    icon: Layout,
  },
  {
    title: "Powerful Sprint Planning",
    description:
      "Plan and manage sprints effectively, ensuring your team stays focused on delivering value.",
    icon: Calendar,
  },
  {
    title: "Comprehensive Reporting",
    description:
      "Gain insights into your team's performance with detailed, customizable reports and analytics.",
    icon: BarChart,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-20 text-center">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold gradient-title pb-6 flex flex-col">
          Streamline Your Sprints with <br/>

          <span className=" font-extrabold text-transparent bg-clip-text gradient-text flex mx-auto gap-3 sm:gap-4 items-center">
            AGILE PRO
          </span>
          
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
          Boost Your Teams Productivity with Our Intuitive Project Management Solution
        </p>

        <Link href='/onboarding'>
          <Button size="lg" className="mr-4">
            Get Started <ChevronRight size={18} />   
          </Button>
        </Link>

        <Link href='#features'>
          <Button size="lg" className="mr-4" variant="outline">
            Learn More<ChevronRight size={18} className="ml-1"/>   
          </Button>
        </Link>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-5 text-white">
        <div className="container mx-auto">
          <h3 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
            Key Features
          </h3> 
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative p-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-3 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 rounded-3xl transition duration-500"></div>
                <div className="flex items-center justify-center w-16 h-16 mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-md">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h4 className="text-2xl font-semibold mb-3 group-hover:text-purple-300 transition">
                  {feature.title}
                </h4>
                <p className="text-gray-400 group-hover:text-gray-200 transition">
                  {feature.description}
                </p>
              </div>
            ))}
    </div>
  </div>
      </section>


      {/* FAQ Section */}
      <section className="py-20 px-5 bg-black text-white">
  <div className="container mx-auto">
    <h3 className="text-4xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
      Frequently Asked Questions
    </h3>
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${faq.question}`}
          className="bg-gray-900 rounded-xl shadow-md mb-4 transition-all duration-300 hover:shadow-xl"
        >
          <AccordionTrigger className="py-4 px-6 text-lg font-semibold text-gray-200 bg-gray-900 rounded-xl hover:bg-gray-600 transition-colors duration-300 ease-in-out">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="py-4 px-6 text-lg text-gray-400">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center px-5">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h3>
          <p className="text-xl mb-12">
            Join thousands of teams already using ZCRUM to streamline their
            projects and boost productivity.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="animate-bounce">
              Start For Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
