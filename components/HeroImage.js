import styles from "@/styles/HeroImage.module.css";

export default function HeroImage() {
  return (
    <div className={styles.hero}>
      <h1 className="font-ibmRegular">Vart ska du vara?</h1>
      <h2 className="font-ibmRegular">HITTA RÄTT LOKAL MED OSS!</h2>
    </div>
  );
}
