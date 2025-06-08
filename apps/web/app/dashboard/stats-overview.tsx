export default function StatsOverview() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <p className="text-gray-600 text-sm">Total Applications</p>
        <p className="text-2xl font-bold text-dark">0</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <p className="text-gray-600 text-sm">In Progress</p>
        <p className="text-2xl font-bold text-primary">0</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <p className="text-gray-600 text-sm">Interviews</p>
        <p className="text-2xl font-bold text-orange-500">0</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <p className="text-gray-600 text-sm">Offers</p>
        <p className="text-2xl font-bold text-green-500">0</p>
      </div>
    </div>
  );
}
