export default function Timeline() {
  const events = [
    { year: "2025", detail: "Completed Internship in Web Development" },
    { year: "2022", detail: "Graduated with BCA in Computer Science" },
  ];

  return (
    <section id="timeline" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">My Journey</h2>
        <div className="relative border-l border-indigo-500 pl-6">
          {events.map((event, i) => (
            <div key={i} className="mb-8">
              <span className="absolute -left-3 w-6 h-6 bg-indigo-600 rounded-full"></span>
              <h3 className="text-xl font-semibold">{event.year}</h3>
              <p className="text-gray-600">{event.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
