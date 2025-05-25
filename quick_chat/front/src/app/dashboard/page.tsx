import React from "react";
import DashNav from '@/components/dashboard/DashNav';
import {authOptions, CustomSession} from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
export default async function Dashboard() {
    const session:CustomSession|null = await getServerSession(authOptions);
    return (
        <div>
            {session?.user && (
            <DashNav name={session.user.name ?? ""} image={session.user.image ?? ""} />
            )}
        </div>
    )
}