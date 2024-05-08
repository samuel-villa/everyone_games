import { PlatformCard } from "./PlatformCard.jsx";


export function PlatformsList({ platforms }) {
  return (
    <section className="genres-list-section">
      <h2>Platforms</h2>
      <ul className="genres-list container">
        {platforms.map((platform) => (
          <PlatformCard key={platform.id} platform={platform} />
        ))}
      </ul>
    </section>
  );
}
