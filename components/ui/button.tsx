import React from "react";
import Link from "next/link";

import classNames from "classnames";

type buttonProps = {
  classes?: string;
  href?: string;
  onClick?: React.MouseEventHandler;
  children: React.ReactNode;
};

function Button(props: buttonProps) {
  const { classes, href, onClick, children } = props;

  const classnames = classNames(
    classes ? classes : "shadow-xl bg-cyan-500 rounded-md text-white"
  );

  if (href) {
    return (
      <Link href={href}>
        <a className={classnames}>{children}</a>
      </Link>
    );
  }

  return (
    <button
      className={classnames}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
