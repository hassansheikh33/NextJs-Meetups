import classes from "./MainNavigation.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainNavigation() {
  const pathname = usePathname();
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Next Meetups</div>
      <nav>
        <ul>
          <li>
            <Link
              href="/"
              className={
                pathname === "/"
                  ? `${classes.navItem} ${classes.active}`
                  : `${classes.navItem}`
              }
            >
              All Meetups
            </Link>
          </li>
          <li>
            <Link
              href="/new"
              className={
                pathname === "/new"
                  ? `${classes.navItem} ${classes.active}`
                  : `${classes.navItem}`
              }
            >
              Add New Meetup
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
