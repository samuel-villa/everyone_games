import { PlatformCard } from "./PlatformCard.jsx";

export function PlatformsList({ platforms }) {
  return (
    <ul className="genres-list container">
      {platforms.map((platform) => (
        <PlatformCard key={platform.id} platform={platform} />
      ))}
    </ul>
  );
}
