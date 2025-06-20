import Link from "next/link";

export const GetInTouch = () => { 
  return (
    <div className="lg:text-start md:px-0">
      <h1 className="text-dark text-2xl font-bold">Get in touch</h1>
      <ul className="flex flex-col gap-2 lg:mt-4 mt-2">
        <li>
          <p>Toll Free Customer Care</p>
          <Link href="tel:+2347067396219" className="text-dark hover:text-primary">
            +234 706 739 6219
          </Link>
        </li>
      </ul>
    </div>
  );
}