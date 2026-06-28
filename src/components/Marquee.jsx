import { useRef } from 'react';

const socialIcons = [
  { icon: 'fa-brands fa-instagram', label: 'Instagram', url: 'https://instagram.com/yourprofile' },
  { icon: 'fa-brands fa-tiktok', label: 'TikTok', url: 'https://tiktok.com/@yourprofile' },
  { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { icon: 'fa-brands fa-x-twitter', label: 'X', url: 'https://x.com/yourprofile' },
  { icon: 'fa-brands fa-facebook-f', label: 'Facebook', url: 'https://facebook.com/yourprofile' },
  { icon: 'fa-brands fa-pinterest-p', label: 'Pinterest', url: 'https://pinterest.com/yourprofile' },
  { icon: 'fa-brands fa-youtube', label: 'YouTube', url: 'https://youtube.com/yourprofile' },
  { icon: 'fa-brands fa-snapchat', label: 'Snapchat', url: 'https://snapchat.com/add/yourprofile' },
];

const brandColors = {
  instagram: 'hover:text-[#E4405F]',
  tiktok: 'hover:text-[#000000]',
  linkedin: 'hover:text-[#0A66C2]',
  x: 'hover:text-[#000000]',
  facebook: 'hover:text-[#1877F2]',
  pinterest: 'hover:text-[#E60023]',
  youtube: 'hover:text-[#FF0000]',
  snapchat: 'hover:text-[#FFFC00]',
};

export default function Marquee() {
  const trackRef = useRef(null);

  return (
    <section className="py-10 border-y border-nude-200/60 bg-nude-100/40 overflow-hidden">
      <div
        ref={trackRef}
        className="marquee-track flex items-center gap-32 will-change-transform"
        style={{ transform: 'translateX(0)' }}
      >
        {[...socialIcons, ...socialIcons].map((item, i) => {
          const colorClass = brandColors[item.label.toLowerCase()] || 'hover:text-gold-500';
          return (
            <div
              key={i}
              className="flex flex-col items-center gap-1 flex-shrink-0"
            >
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-nude-400 transition-all duration-300 hover:scale-110 ${colorClass}`}
                aria-label={item.label}
              >
                <i className={`${item.icon} text-3xl sm:text-4xl`} />
              </a>
              <span className="text-[0.55rem] uppercase tracking-widest text-nude-400">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}