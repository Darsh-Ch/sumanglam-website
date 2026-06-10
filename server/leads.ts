import { db } from "@/lib/db";
import { ContactMethod, ProjectType } from "@prisma/client";

export type ConsultationInput = {
  name: string;
  phone: string;
  email?: string | null;
  projectType: ProjectType;
  requirements: string;
  preferredContactMethod?: ContactMethod | null;
  sourcePage?: string | null;
  sourceType?: string | null;
  referringUrl?: string | null;
};

/**
 * Creates (or reuses by phone) a Lead and attaches a Consultation.
 * Duplicate handling decision: an existing lead with the same phone is
 * updated rather than duplicated, preserving its pipeline status.
 */
export async function createConsultation(input: ConsultationInput) {
  const existingLead = await db.lead.findFirst({
    where: { phone: input.phone },
    orderBy: { createdAt: "desc" },
  });

  const lead = existingLead
    ? await db.lead.update({
        where: { id: existingLead.id },
        data: {
          name: input.name,
          email: input.email ?? existingLead.email,
          sourcePage: input.sourcePage ?? existingLead.sourcePage,
          leadSource: input.sourceType ?? existingLead.leadSource,
          referringUrl: input.referringUrl ?? existingLead.referringUrl,
        },
      })
    : await db.lead.create({
        data: {
          name: input.name,
          phone: input.phone,
          email: input.email ?? null,
          leadSource: input.sourceType ?? "consultation_form",
          sourcePage: input.sourcePage ?? null,
          referringUrl: input.referringUrl ?? null,
        },
      });

  const consultation = await db.consultation.create({
    data: {
      leadId: lead.id,
      projectType: input.projectType,
      requirements: input.requirements,
      preferredContactMethod: input.preferredContactMethod ?? null,
    },
  });

  notifyAdmin(lead.name, consultation.id);

  return { lead, consultation };
}

/**
 * Admin notification placeholder. The notification channel (email/WhatsApp/
 * dashboard) is an unresolved open question — see
 * project-vault/15_Open_Questions.md. Logged for now; leads remain visible
 * in the admin dashboard regardless.
 */
function notifyAdmin(leadName: string, consultationId: string) {
  console.info(
    `[notification] New consultation ${consultationId} from ${leadName}. Configure a real channel before launch.`,
  );
}
