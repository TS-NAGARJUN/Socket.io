import React from 'react';
import {Card} from "@/components/ui/card";

export default function FeatureCard({
    icon,
    title,
    description,
}:
{
title: string;
description: string;
icon: string;
}) 
{
    return(
        <Card className="p-6 bg-card">
            <div className="text-3xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm">{description}</p>
        </Card>
    );
}