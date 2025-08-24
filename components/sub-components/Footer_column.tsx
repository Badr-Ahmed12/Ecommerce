type FooterColumnProps = {
  title: string;
  links: string[];
};

export default function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="font-bold mb-3">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index} className="hover:underline cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}
