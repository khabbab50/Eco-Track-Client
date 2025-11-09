import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 footer sm:footer-horizontal bg-base-200 text-base-content p-10">
      <aside className="col-span-3">
        <Link to="/" className=" text-2xl">
          <h1 className="text-[#0B5E06]">
            Eco<span className="font-bold">Tech</span>
          </h1>
        </Link>
        <p>
          <strong>EcoTech</strong> Building a sustainable future through
          technology & community.
        </p>
      </aside>
      <nav className="col-span-2">
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav className="col-span-2">
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav className="col-span-2">
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
      <form className="col-span-3">
        <h6 className="footer-title">Newsletter</h6>
        <fieldset className="w-80">
          <label>Enter your email address</label>
          <div className="join">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered join-item"
            />
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
};

export default Footer;
