import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

/**
 * Tournament Card Component
 * Displays an upcoming tournament with details and registration button
 */
function TournamentCard({ tournament }) {
  return (
    <div className="bg-white rounded-lg border-2 border-[#A5D6A7] hover:border-[#66BB6A] transition-colors overflow-hidden">
      {/* Image Placeholder */}
      <div className="h-40 bg-neutral-200">
        {/* Tournament image would go here */}
      </div>

      {/* Content */}
      <div className="p-5">
        <h4 className="font-black text-base uppercase tracking-wide text-neutral-900 mb-2">
          {tournament.name}
        </h4>

        <div className="space-y-1 mb-4">
          <p className="text-sm text-neutral-600">
            Prize Pool: <span className="font-semibold text-neutral-800">{tournament.prizePool}</span>
          </p>
          <p className="text-sm text-neutral-600">{tournament.slots}</p>
          <p className="text-sm text-neutral-600">{tournament.type}</p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link
            to={`/esports/tournament/${tournament.id}`}
            className="btn-esports flex items-center gap-1 text-xs py-2 px-4"
          >
            VIEW DETAILS
            <FiArrowUpRight className="w-3 h-3" />
          </Link>
          <Link
            to={`/esports/register/${tournament.id}`}
            className="btn-esports-outline text-xs py-2 px-4"
          >
            VIEW DETAILS
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TournamentCard;
