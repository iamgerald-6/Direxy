import Link from "next/link";

const PhoneLink = ({ phoneNumber }) => {
  return (
    <Link
      className="font-sfMedium text-primary-200"
      href={`tel:${phoneNumber}`}
    >
      {phoneNumber}
    </Link>
  );
};

export default PhoneLink;
