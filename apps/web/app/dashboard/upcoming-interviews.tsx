export default function UpcomingInterviews() {
  return (
    <div className="bg-white rounded-lg border border-gray-100 p-6">
      <h2 className="text-xl font-semibold mb-4">Upcoming Interviews</h2>
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <p className="text-gray-600">No upcoming interviews</p>
        <p className="text-gray-500 text-sm">Interviews you schedule will appear here</p>
      </div>
    </div>
  );
}
