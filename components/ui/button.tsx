import React from "react";
import Link from "next/link";

import classNames from "classnames";

type buttonProps = {
  classes?: string;
  href?: string;
  onClick?: React.MouseEventHandler;
  type?: "button" | "submit" | "reset";
  name?: string;
  title?: string;
  ariaLabel?: string;
  afterHoverEffect?: boolean;
  children: React.ReactNode;
};

function Button(props: buttonProps) {
  const {
    classes,
    href,
    onClick,
    children,
    type,
    name,
    title,
    ariaLabel,
    afterHoverEffect,
  } = props;

  const afterHoverEffectClass = `after:content-[''] relative after:absolute after:w-full 
                                after:h-1 after:bg-logo-blue after:-bottom-1 after:left-0 after:right-0 
                                after:scale-x-0 after:origin-center after:ease-in-out after:duration-500
                                hover:after:origin-center hover:after:scale-x-100`;

  const classnames = classNames(
    classes ? `${classes}` : "shadow-xl bg-cyan-500 rounded-md text-white",
    afterHoverEffect && afterHoverEffectClass
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={classnames} aria-label={ariaLabel}>
          {children}
        </a>
      </Link>
    );
  }

  return (
    <button
      className={classnames}
      onClick={onClick}
      type={type || "button"}
      name={name}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export default Button;
