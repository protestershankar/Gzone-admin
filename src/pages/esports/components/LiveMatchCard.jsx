import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

/**
 * Live Match Card Component
 * Displays a currently live match with teams, scores, and watch button
 */
function LiveMatchCard({ match, isExpanded = false }) {
  return (
    <div
      className={`shrink-0 bg-white rounded-lg border-2 border-[#A5D6A7] hover:border-[#66BB6A] transition-colors ${
        isExpanded ? 'w-72' : 'w-56'
      }`}
    >
      {/* Image Placeholder */}
      <div className="h-32 bg-neutral-200 rounded-t-md">
        {/* Game image would go here */}
      </div>

      {/* Content */}
      <div className="p-4">
        <h4 className="font-black text-sm uppercase tracking-wide text-neutral-900 mb-2">
          {match.game}
        </h4>

        {isExpanded && (
          <>
            <div className="text-xs text-neutral-600 mb-1">
              Tournament Details
            </div>
            <div className="text-xs text-neutral-600 mb-1">
              Tournament Details
            </div>
            <div className="text-xs text-neutral-600 mb-3">
              Tournament Details
            </div>

            <Link
              to={`/esports/watch/${match.id}`}
              className="btn-esports w-full flex items-center justify-center gap-1 text-xs"
            >
              WATCH TOURNAMENT
              <FiArrowUpRight className="w-3 h-3" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default LiveMatchCard;
