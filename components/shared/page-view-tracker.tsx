"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

type PageViewTrackerProps = {
  event: AnalyticsEventName;
  sourceType?: string;
  sourceId?: string;
};

/** Fires a documented analytics event once when the page mounts. */
export function PageViewTracker({ event, sourceType, sourceId }: PageViewTrackerProps) {
  useEffect(() => {
    trackEvent(event, { sourceType, sourceId });
  }, [event, sourceType, sourceId]);

  return null;
}
