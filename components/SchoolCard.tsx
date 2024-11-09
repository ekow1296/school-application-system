"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, DollarSign, BarChart, Star } from "lucide-react";
import Image from "next/image";

interface SchoolCardProps {
  name: string;
  location: string;
  programs: string[];
  tuition: string;
  acceptanceRate: string;
  rating: number;
  image: string;
}

export default function SchoolCard({
  name,
  location,
  programs,
  tuition,
  acceptanceRate,
  rating,
  image,
}: SchoolCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="relative h-48 md:h-full">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:col-span-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-2xl font-semibold">{name}</h3>
              <div className="flex items-center gap-2 text-muted-foreground mt-2">
                <MapPin className="h-4 w-4" />
                <span>{location}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{rating}</span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {programs.map((program) => (
              <Badge key={program} variant="secondary">
                {program}
              </Badge>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <span>{tuition}/year</span>
            </div>
            <div className="flex items-center gap-2">
              <BarChart className="h-4 w-4 text-muted-foreground" />
              <span>Acceptance: {acceptanceRate}</span>
            </div>
          </div>

          <div className="mt-6 flex gap-4">
            <Button className="flex-1">Apply Now</Button>
            <Button variant="outline" className="flex-1">Learn More</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}