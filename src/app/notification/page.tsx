import { PushNotification } from "@/libs/firebase/components";
import { PageHeader } from "@/shared/components";
import React from "react";

export default function NotificationPage() {
   return (
      <div className="p-3">
         <PageHeader title="Notification" subtitle="Home / Notification" />
         <PushNotification />
      </div>
   );
}
