import type { Metadata } from "next";
import Link from "next/link";
import { GridBackground } from "@/components/GridBackground";

export const metadata: Metadata = {
  title: "Privacy Policy - 4Us",
  description:
    "Privacy Policy for 4Us. How we collect, use and protect your information.",
};

const sectionCard =
  "rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent backdrop-blur-sm p-6 sm:p-8 shadow-xl shadow-black/20";
const sectionTitle =
  "mb-5 text-xl font-semibold text-white sm:text-2xl flex items-center gap-3 after:content-[''] after:h-px after:flex-1 after:bg-gradient-to-r after:from-cyan-400/50 after:via-purple-500/50 after:to-orange-400/50 after:rounded-full";
const subsectionTitle = "mb-2 mt-6 text-lg font-medium text-cyan-400";
const listItem =
  "relative pl-6 text-gray-300 leading-relaxed before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-cyan-400 before:to-purple-500";
const listItemGap = "space-y-3";

export default function PrivacyPolicyPage() {
  return (
    <main id="top" className="relative min-h-screen overflow-hidden">
      <GridBackground />

      <div className="relative z-10 mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 md:py-16">
        {/* Back link - pill style */}
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2.5 text-sm text-gray-300 backdrop-blur-sm transition-all hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-400"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>

        {/* Hero */}
        <header className="relative mb-12 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-purple-500/5 to-orange-500/10 p-8 shadow-2xl shadow-cyan-500/5 backdrop-blur-sm sm:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,211,238,0.15),transparent)]" />
          <div className="relative">
            <span className="inline-block rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-cyan-400">
              4Us
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-gray-300">
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You
              respond to our advertisements and tells You about Your privacy
              rights and how the law protects You. We use Your Personal Data to
              contact and support you, as well as to provide and improve the
              Service. By using the Service, You agree to the collection and use
              of information in accordance with this Privacy Policy.
            </p>
          </div>
        </header>

        <article className="space-y-8">
          <section className={sectionCard}>
            <h2 className={sectionTitle}>Interpretation and Definitions</h2>
            <h3 className={subsectionTitle}>Interpretation</h3>
            <p className="mb-6 leading-relaxed text-gray-300">
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.
            </p>
            <h3 className={subsectionTitle}>Definitions</h3>
            <p className="mb-4 leading-relaxed text-gray-300">
              For the purposes of this Privacy Policy:
            </p>
            <ul className={`${listItemGap} list-none pl-0`}>
              <li className={listItem}>
                <strong className="text-gray-200">Company</strong> (referred to
                as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot;
                or &quot;Our&quot; in this Agreement) refers to 4Us.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">Device</strong> means any
                device that can access the Service such as a computer, a
                cellphone or a digital tablet.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">Personal Data</strong> is any
                information that relates to an identified or identifiable
                individual.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">Service</strong> refers to the
                advertisement, website, or application.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">Service Provider</strong>{" "}
                means any natural or legal person who processes the data on
                behalf of the Company. It refers to third-party companies or
                individuals employed by the Company to facilitate the Service, to
                provide the Service on behalf of the Company, to perform
                services related to the Service or to assist the Company in
                analyzing how the Service is used.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">Usage Data</strong> refers to
                data collected automatically, either generated by the use of the
                Service or from the Service infrastructure itself (for example,
                the duration of a page visit).
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">You</strong> means the
                individual accessing or using the Service, or the company, or
                other legal entity on behalf of which such individual is
                accessing or using the Service, as applicable.
              </li>
            </ul>
          </section>

          <section className={sectionCard}>
            <h2 className={sectionTitle}>
              Collecting and Using Your Personal Data
            </h2>
            <h3 className={subsectionTitle}>Types of Data Collected</h3>
            <h4 className="mb-2 mt-4 text-base font-medium text-purple-400">
              Personal Data
            </h4>
            <p className="mb-4 leading-relaxed text-gray-300">
              While using Our Service, We may ask You to provide Us with certain
              personally identifiable information that can be used to contact or
              identify You. Personally identifiable information may include, but
              is not limited to:
            </p>
            <ul className={`mb-6 ${listItemGap} list-none pl-0`}>
              <li className={listItem}>First name and last name</li>
              <li className={listItem}>Email address</li>
              <li className={listItem}>Phone number</li>
              <li className={listItem}>
                Location details such as your address, city, or country
              </li>
              <li className={listItem}>
                Any other data such as personal preferences, requirements, or
                comments
              </li>
            </ul>

            <h3 className={subsectionTitle}>Use of Your Personal Data</h3>
            <p className="mb-4 leading-relaxed text-gray-300">
              The Company may use Personal Data for the following purposes:
            </p>
            <ul className={`mb-6 ${listItemGap} list-none pl-0`}>
              <li className={listItem}>
                To provide and maintain our Service, including to monitor the
                usage of our Service.
              </li>
              <li className={listItem}>
                To manage Your Account: to manage Your registration as a user of
                the Service. The Personal Data You provide can give You access
                to different functionalities of the Service that are available
                to You as a registered user.
              </li>
              <li className={listItem}>
                For the performance of a contract: the development, compliance
                and undertaking of the purchase contract for the products, items
                or services You have purchased or of any other contract with Us
                through the Service.
              </li>
              <li className={listItem}>
                To contact You: To contact You by email, telephone calls, SMS, or
                other equivalent forms of electronic communication, such as a
                mobile application&apos;s push notifications regarding updates
                or informative communications related to the functionalities,
                products or contracted services, including the security updates,
                when necessary or reasonable for their implementation.
              </li>
              <li className={listItem}>
                To provide You with news, special offers and general information
                about other goods, services and events which we offer that are
                similar to those that you have already purchased or enquired
                about unless You have opted not to receive such information.
              </li>
              <li className={listItem}>
                To manage Your requests: To attend and manage Your requests to
                Us.
              </li>
              <li className={listItem}>
                For business transfers: We may use Your information to evaluate
                or conduct a merger, divestiture, restructuring, reorganization,
                dissolution, or other sale or transfer of some or all of Our
                assets, whether as a going concern or as part of bankruptcy,
                liquidation, or similar proceeding, in which Personal Data held
                by Us about our Service users is among the assets transferred.
              </li>
              <li className={listItem}>
                For other purposes: We may use Your information for other
                purposes, such as data analysis, identifying usage trends,
                determining the effectiveness of our promotional campaigns and
                to evaluate and improve our Service, products, services,
                marketing and your experience.
              </li>
            </ul>

            <p className="mb-4 leading-relaxed text-gray-300">
              We may share Your personal information in the following
              situations:
            </p>
            <ul className={`mb-0 ${listItemGap} list-none pl-0`}>
              <li className={listItem}>
                <strong className="text-gray-200">With Service Providers:</strong>{" "}
                We may share Your personal information with Service Providers to
                monitor and analyze the use of our Service, to contact You.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">For business transfers:</strong>{" "}
                We may share or transfer Your personal information in connection
                with, or during negotiations of, any merger, sale of Company
                assets, financing, or acquisition of all or a portion of Our
                business to another company.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">With Affiliates:</strong> We
                may share Your information with Our affiliates, in which case
                we will require those affiliates to honor this Privacy Policy.
                Affiliates include Our parent company and any other
                subsidiaries, joint venture partners or other companies that We
                control or that are under common control with Us.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">With business partners:</strong>{" "}
                We may share Your information with Our business partners to
                offer You certain products, services or promotions.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">With other users:</strong> when
                You share personal information or otherwise interact in the
                public areas with other users, such information may be viewed by
                all users and may be publicly distributed outside.
              </li>
              <li className={listItem}>
                <strong className="text-gray-200">With Your consent:</strong> We
                may disclose Your personal information for any other purpose with
                Your consent.
              </li>
            </ul>
          </section>

          <section className={sectionCard}>
            <h2 className={sectionTitle}>
              Retention of Your Personal Data
            </h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </p>
            <p className="mb-0 leading-relaxed text-gray-300">
              The Company will also retain Usage Data for internal analysis
              purposes.
            </p>
          </section>

          <section className={sectionCard}>
            <h2 className={sectionTitle}>
              Transfer of Your Personal Data
            </h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              Your information, including Personal Data, is processed at the
              Company&apos;s operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </p>
            <p className="mb-4 leading-relaxed text-gray-300">
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </p>
            <p className="mb-0 leading-relaxed text-gray-300">
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </p>
          </section>

          <section className={sectionCard}>
            <h2 className={sectionTitle}>
              Disclosure of Your Personal Data
            </h2>
            <h3 className={subsectionTitle}>Law enforcement</h3>
            <p className="mb-6 leading-relaxed text-gray-300">
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </p>
            <h3 className={subsectionTitle}>Other legal requirements</h3>
            <p className="mb-4 leading-relaxed text-gray-300">
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </p>
            <ul className={`mb-0 ${listItemGap} list-none pl-0`}>
              <li className={listItem}>Comply with a legal obligation</li>
              <li className={listItem}>
                Protect and defend the rights or property of the Company
              </li>
              <li className={listItem}>
                Prevent or investigate possible wrongdoing in connection with the
                Service
              </li>
              <li className={listItem}>
                Protect the personal safety of Users of the Service or the
                public
              </li>
              <li className={listItem}>Protect against legal liability</li>
            </ul>
          </section>

          <section className={sectionCard}>
            <h2 className={sectionTitle}>
              Security of Your Personal Data
            </h2>
            <p className="mb-0 leading-relaxed text-gray-300">
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </p>
          </section>

          <section className={sectionCard}>
            <h2 className={sectionTitle}>
              Links to Other Websites
            </h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party&apos;s site. We strongly advise You
              to review the Privacy Policy of every site You visit.
            </p>
            <p className="mb-0 leading-relaxed text-gray-300">
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </p>
          </section>

          <section className={sectionCard}>
            <h2 className={sectionTitle}>
              Changes to this Privacy Policy
            </h2>
            <p className="mb-4 leading-relaxed text-gray-300">
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this
              page.
            </p>
            <p className="mb-4 leading-relaxed text-gray-300">
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
            <p className="inline-block rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-gray-400">
              Last updated: 2026/03/07 08:24:50
            </p>
          </section>

          {/* Contact CTA card */}
          <section className="relative overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 via-purple-500/10 to-transparent p-8 shadow-xl shadow-cyan-500/10 backdrop-blur-sm sm:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 translate-x-8 -translate-y-8 rounded-full bg-cyan-400/10 blur-2xl" />
            <div className="relative">
              <h2 className={sectionTitle}>Contact Us</h2>
              <p className="mb-6 leading-relaxed text-gray-300">
                If you have any questions about this Privacy Policy, You can
                contact us via email at:
              </p>
              <a
                href="mailto:info@4us.co"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-cyan-400/40 bg-cyan-500/10 px-5 py-3 font-semibold text-cyan-400 transition-all hover:border-cyan-400 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <path d="m22 6-10 7L2 6" />
                </svg>
                info@4us.co
              </a>
            </div>
          </section>
        </article>

        <footer className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-cyan-400/50 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:scale-[1.02] hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to home
          </Link>
          <a
            href="#top"
            className="text-xs text-gray-500 transition-colors hover:text-cyan-400"
          >
            Back to top
          </a>
        </footer>
      </div>
    </main>
  );
}
