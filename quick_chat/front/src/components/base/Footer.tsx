'use client';
import React from "react";  
import Link from "next/link";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export default function Footer(){
    return(
        <footer className = "p-6 bg-gray-900 text-white">
            <div className="flex justify-between">
                <div>
                    <div>© 2024 QuickChat. All rights reserved.</div>
                    <div className="space-x-4 mt-2">
                        {/* <link href="/privacy-policy">Privacy Policy</link>/ */}
                        {/* <link href="/terms-of-service">Terms of Service</link> */}
                    </div>
                </div>
                <div className="space-y-4">
                     <Input
            placeholder="Subscribe to our newsletter"
            className="bg-gray-800 border-none"
          />
            <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
                </div>
                </div>
        </footer>

    );
}