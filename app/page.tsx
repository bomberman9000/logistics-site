import { Metadata } from 'next';
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ServicesGrid from "@/components/ServicesGrid";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Логистическая компания Самара | Грузоперевозки по РФ и СНГ | СИНЕРГИЯ+",
  description: "Логистическая компания Самара. Грузоперевозки по РФ и СНГ. Перевозки Москва Самара, СПб Самара, Самара Казань. Договор, контроль, сроки — без сюрпризов.",
  keywords: "грузоперевозки Самара, логистическая компания Самара, экспедирование Самара, перевозки Москва Самара, перевозки СПб Самара, перевозки Самара Казань",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ServicesGrid />
      <HowItWorks />
      <FAQ />
      <CallToAction />
      <LeadForm />
    </>
  );
}
