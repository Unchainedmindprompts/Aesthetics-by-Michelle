import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./InteriorHero.module.css";

type Props = {
  label: string;
  title: string;
  children?: ReactNode;
} & (
  | { image: string; alt: string; treatmentRoom?: boolean; arrival?: false }
  | { arrival: true; image?: never; alt?: never; treatmentRoom?: never }
);

const arrivalPhotos = [
  { name: "exterior", caption: "Building entrance", alt: "Studio building entrance viewed from the parking lot." },
  { name: "lobby", caption: "Lobby", alt: "Lobby with a bench, potted tree, and abstract artwork." },
  { name: "stairwell", caption: "Stairwell", alt: "Sunlit interior stairwell with black railings." },
];

export default function InteriorHero(props: Props) {
  return (
    <section className={styles.hero} aria-labelledby="interior-heading">
      <div className={styles.layout}>
        <div className={styles.copy}>
          <p className={styles.label}>{props.label}</p>
          <h1 id="interior-heading" className={styles.heading}>{props.title}</h1>
          {props.children && <div className={styles.details}>{props.children}</div>}
        </div>
        {props.arrival ? (
          <div className={styles.arrival}>
            <h2 className={styles.arrivalTitle}>When you arrive</h2>
            <div className={styles.gallery}>
              {arrivalPhotos.map((photo) => (
                <figure key={photo.name}>
                  <Image src={`/images/interior/${photo.name}.jpg`} alt={photo.alt}
                    width={240} height={320} sizes="(max-width: 700px) 28vw, 180px" />
                  <figcaption>{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        ) : props.treatmentRoom ? (
          <figure className={styles.room}>
            <Image src={`/images/interior/${props.image}.jpg`} alt={props.alt}
              width={320} height={180} sizes="(max-width: 375px) 80vw, 320px" priority />
            <figcaption>Michelle’s treatment room</figcaption>
          </figure>
        ) : (
          <div className={styles.image}>
            <Image src={`/images/interior/${props.image}.jpg`} alt={props.alt} fill priority
              sizes="(max-width: 700px) 100vw, (min-width: 1440px) 720px, 52vw" />
          </div>
        )}
      </div>
    </section>
  );
}
