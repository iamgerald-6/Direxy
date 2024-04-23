import Link from "next/link";

const EmailLink = ({ email }) => {
  return (
    <Link
      className="font-sfMedium text-primary-200"
      href={`mailto:${email}`}
      target="_blank"
      rel="noOpener noReferrer"
    >
      {email}
    </Link>
  );
};

export default EmailLink;
