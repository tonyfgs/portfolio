// fichier : `model/project.tsx`
export type Project = {
    title: string;
    imagePresentation: string;
    category: string;
    description: string;
    photos: string[];
}

export const currentProject: Project[] = [
    {
        title: "Optifit",
        imagePresentation: "/optifit1.png",
        category: "Design",
        description: "Optifit",
        photos: ["/optifit1.png"],
    },
];
