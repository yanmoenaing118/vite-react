import {
  NavLink,
  Outlet,
  useSearchParams,
  useLocation,
} from "react-router-dom";
import { getInvoices } from "../data";

function QueryNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props} />;
}
export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();

  const handleActiveLink = ({ isActive }) => {
    return {
      display: "block",
      margin: "1rem 0",
      color: isActive ? "red" : "",
    };
  };

  const handleSearch = ({ target: { value } }) => {
    if (value) {
      setSearchParams({ filter: value });
    } else {
      setSearchParams({});
    }
  };

  const filterInvoices = (invoice) => {
    let filter = searchParams.get("filter");
    if (!filter) return true;
    let name = invoice.name.toLowerCase();
    return name.startsWith(filter.toLowerCase());
  };

  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        <input
          type="text"
          value={searchParams.get("filter") || ""}
          onChange={handleSearch}
        />
        {invoices.filter(filterInvoices).map((invoice) => (
          <QueryNavLink
            style={handleActiveLink}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </QueryNavLink>
        ))}
      </nav>

      <Outlet />
    </div>
  );
}
