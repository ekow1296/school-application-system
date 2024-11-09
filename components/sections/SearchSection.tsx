"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MapPin } from "lucide-react";
import SearchFilters from '@/components/SearchFilters';

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("undergraduate");

  return (
    <section className="py-16 bg-muted/50">
      <div className="container px-4">
        <Card className="p-6">
          <Tabs defaultValue="undergraduate" className="mb-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger 
                value="undergraduate" 
                onClick={() => setActiveTab("undergraduate")}
              >
                Undergraduate
              </TabsTrigger>
              <TabsTrigger 
                value="postgraduate" 
                onClick={() => setActiveTab("postgraduate")}
              >
                Postgraduate
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-[1fr,300px] gap-6">
            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for schools, programs, or courses..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Location"
                  className="pl-10"
                />
              </div>
              <Button className="w-full">Search Programs</Button>
            </div>

            <SearchFilters />
          </div>
        </Card>
      </div>
    </section>
  );
}