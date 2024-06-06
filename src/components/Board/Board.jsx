import svg from "../../img/icons.svg";

export default function Board({ title, icon, bg }) {
  return (
    <li>
      <h3>{title}</h3>
      <div>
        <svg width="24px" height="24px">
          <use href={`${svg}#${icon}`} />
        </svg>
      </div>
      <div>
        <img
          srcSet={`${bg.mob} 375w, ${bg.tab} 768w, ${bg.desc} 1180w`}
          sizes="(max-width: 767px) 375px, (min-width: 768px) 768px, (min-width: 1440px) 1180px"
          src={bg.mini}
          alt={bg.id}
          width="28px"
          height="28px"
        />
      </div>
    </li>
  );
}
