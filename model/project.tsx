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
        imagePresentation: "/optifit_logo.png",
        category: "Mobile",
        description: "Optifit est une application mobile de suivi d'entraînement de musculation assistée par intelligence artificielle \n " +
            "L'application s’inscrit dans cette dynamique innovante, visant à offrir une expérience de remise en forme sur mesure et à moindre coût. \n" +
            "Cette application à été developpé en React Native ",
        photos: ["/optifit1.png",
        "/optifit2.png",
        "/optifit3.png",
        "/optifit4.png"],
    },
];
