import "./list-item.css";

import { forwardRef } from "react";
import { Link } from "@radix-ui/react-navigation-menu";

const ListItem = forwardRef(({ children, ...props }, ref) => (
  <li>
    <Link asChild>
      <a className="ListItem" {...props} ref={ref}>
        <div>{children}</div>
      </a>
    </Link>
  </li>
));

export default ListItem;
