interface WorkerCardProps {
  worker: {
    _id: string;
    firstName: string;
    lastName: string;
    isAvailable: boolean;
    skills: { name: string; category: string }[];
    rating: { average: number; count: number };
  };
}

export default function WorkerCard({ worker }: WorkerCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-gray-900">
          {worker.firstName} {worker.lastName}
        </h3>
        <span
          className={`px-2 py-1 text-xs rounded-full ${
            worker.isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {worker.isAvailable ? 'Available' : 'Busy'}
        </span>
      </div>
      
      <div className="text-sm text-gray-500 mb-4">
        ★ {worker.rating.average.toFixed(1)} ({worker.rating.count} reviews)
      </div>
      
      <div className="flex flex-wrap gap-2">
        {worker.skills.map((skill, index) => (
          <span key={index} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
