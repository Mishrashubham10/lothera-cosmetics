'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      location: 'Remote / Bangalore',
      type: 'Full-time',
      description:
        "We're looking for a skilled React/Next.js developer with an eye for detail and a passion for building user-friendly eCommerce experiences.",
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      location: 'Remote / Mumbai',
      type: 'Contract',
      description:
        'Help us craft pixel-perfect designs and smooth user journeys for millions of beauty enthusiasts.',
    },
    {
      id: 3,
      title: 'Digital Marketing Specialist',
      location: 'Remote / Delhi',
      type: 'Full-time',
      description:
        'Drive growth through SEO, paid campaigns, and creative strategies tailored for the beauty industry.',
    },
  ];

  return (
    // <div className="min-h-screen bg-gradient-to-b from-[#fff5f7] to-white px-4 py-12">
    //   <div className="container mx-auto max-w-5xl">
    //     {/* Header Section */}
    //     <div className="text-center mb-12">
    //       <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#e94057] to-[#f27121] bg-clip-text text-transparent">
    //         Careers at Lothera
    //       </h1>
    //       <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
    //         Join our mission to redefine beauty experiences worldwide. We&#39;re
    //         looking for creative, passionate, and driven individuals to grow
    //         with us.
    //       </p>
    //     </div>

    //     <Separator className="mb-12" />

    //     {/* Jobs Section */}
    //     <div className="grid gap-8 md:grid-cols-2">
    //       {jobs.map((job) => (
    //         <Card
    //           key={job.id}
    //           className="hover:shadow-lg transition-shadow border border-border/50"
    //         >
    //           <CardHeader>
    //             <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
    //             <p className="text-sm text-muted-foreground">
    //               {job.location} • {job.type}
    //             </p>
    //           </CardHeader>
    //           <CardContent>
    //             <p className="mb-6">{job.description}</p>
    //             <Button className="text-white w-full bg-gradient-to-r from-[#e94057]/95 to-[#f27121]/95">
    //               Apply Now
    //             </Button>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>

    //     {/* CTA Section */}
    //     <div className="mt-16 text-center">
    //       <h2 className="text-2xl font-bold mb-4">
    //         Didn&#39;t find a role for you?
    //       </h2>
    //       <p className="text-muted-foreground mb-6">
    //         We&#39;re always open to meeting passionate people. Send us your resume
    //         and tell us how you can make a difference.
    //       </p>
    //       <Button variant="outline" className="hover:bg-primary/10">
    //         Send Resume
    //       </Button>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen bg-gradient-to-b from-[#fff5f7] to-white px-4 py-12">
      <div className="container mx-auto max-w-5xl">
        {/* =========== HEADER SECTION ============ */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#e94057] to-[#f27121] bg-clip-text text-transparent">
            Careers at Lothera
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Join our mission to redefine beauty experiences worldwide. We&#39;re
            looking for creative, passionate, and driven individuals to grow
            with us.
          </p>
        </div>

        <Separator className="mb-8" />

        {/* ========== JOB SECTION =========== */}
        <div className="grid gap-8 md:grid-cols-2">
          {jobs.map((job) => (
            <Card
              key={job.id}
              className="hover:shadow transition-shadow border border-border/50"
            >
              <CardHeader>
                <CardTitle className="text-xl font-bold">{job.title}</CardTitle>
                <CardDescription className="text-md text-muted-foreground">
                  {job.location} • {job.type}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-6">{job.description}</p>
                <Button className="w-full text-primary-foreground hover:shadow transition-shadow bg-gradient-to-r from-[#e94057]/95 to-[#f27121]/95">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* =========== CTA SECTION =========== */}
        <div className="mt-16 text-center flex flex-col gap-6 items-center">
          <h2 className="text-2xl font-bold">
            Didn&#39;t find a role for you?
          </h2>
          <p className="text-muted-foreground">
            We&#39;re always open to meeting passionate people. Send us your
            resume and tell us how you can make a difference.
          </p>
          <Button variant="outline" size="lg" className='w-max'>
            Send Resume
          </Button>
        </div>
      </div>
    </div>
  );
}