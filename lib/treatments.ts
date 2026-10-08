/** Approved service details shared by the menu, service pages, and offers. */
export type Treatment = {
  id: string;
  path: string;
  name: string;
  price: number;
  minutes: number;
  description: string;
  bookingUrl: string;
};

export const TREATMENTS: Treatment[] = [
  {
    "id": "facial",
    "path": "/facials",
    "name": "Facial",
    "price": 95,
    "minutes": 60,
    "description": "Facials include cleansing the skin and aligning the pH balance, tailored to each client's skin needs. Steaming, cleansing, exfoliating, masking, and moisturizing include eye serum and SPF, as well as retinol if needed.",
    "bookingUrl": "https://aestheticsbymichellehoffman.as.me/?appointmentType=66013609"
  },
  {
    "id": "anti-aging-facial",
    "path": "/facials",
    "name": "Anti-Aging Facial",
    "price": 120,
    "minutes": 75,
    "description": "Specialized, result-driven skin treatments designed to minimize fine lines, boost collagen production, and improve skin elasticity. Includes a peptide mask and serums.",
    "bookingUrl": "https://aestheticsbymichellehoffman.as.me/?appointmentType=94547747"
  },
  {
    "id": "acne-facial",
    "path": "/facials",
    "name": "Acne Facial",
    "price": 110,
    "minutes": 60,
    "description": "Clean and balance the skin barrier. Cleansing and gentle microdermabrasion help clean bacteria out of the pores, tailored to each client's skin needs.",
    "bookingUrl": "https://aestheticsbymichellehoffman.as.me/?appointmentType=66010726"
  },
  {
    "id": "eyebrow-lamination",
    "path": "/brow-lash",
    "name": "Eyebrow Lamination",
    "price": 30,
    "minutes": 45,
    "description": "Brow lamination straightens and shapes the brow hair using a perm-like solution for the skin, smoothing curly, unruly hair. Lasts up to 5 weeks.",
    "bookingUrl": "https://aestheticsbymichellehoffman.as.me/?appointmentType=66013843"
  },
  {
    "id": "microneedling",
    "path": "/microneedling",
    "name": "Microneedling",
    "price": 165,
    "minutes": 60,
    "description": "Collagen induction therapy is a cosmetic procedure that involves tiny needles entering the skin to produce collagen. Also great for acne and rosacea, and to diminish scarring.",
    "bookingUrl": "https://aestheticsbymichellehoffman.as.me/?appointmentType=66013704"
  },
  {
    "id": "dermaplaning",
    "path": "/dermaplaning",
    "name": "Dermaplaning",
    "price": 40,
    "minutes": 30,
    "description": "A minimally invasive cosmetic procedure for the skin. Dermaplaning shaves away the uppermost layers of the skin (hair), making the face smooth and supple.",
    "bookingUrl": "https://aestheticsbymichellehoffman.as.me/?appointmentType=66013775"
  }
];

export function treatmentById(id: string): Treatment {
  const treatment = TREATMENTS.find((item) => item.id === id);
  if (!treatment) throw new Error(`Unknown treatment: ${id}`);
  return treatment;
}
