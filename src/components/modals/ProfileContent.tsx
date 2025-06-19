import { Calendar, MapPin, Book, Target, Github } from 'lucide-react';
import { personalInfo } from '@/data/personal';

export function ProfileContent() {
  return (
    <div className="space-y-6">
      {/* 基本情報 */}
      <div className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            {personalInfo.name.charAt(0)}
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 font-zen-maru">
              {personalInfo.name}
            </h3>
            <p className="text-gray-600 font-zen-maru">
              {personalInfo.title}
            </p>
          </div>
        </div>
      </div>

      {/* 学習の軌跡 */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 font-zen-maru">
          <Book size={20} />
          学習の軌跡
        </h4>
        <div className="space-y-3">
          {personalInfo.learningJourney.map((item, index) => (
            <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Calendar size={16} className="text-blue-600" />
              <div className="flex-1">
                <div className="font-medium text-gray-900 font-zen-maru">
                  {item.period}
                </div>
                <div className="text-sm text-gray-600 font-zen-maru">
                  {item.title}
                </div>
                <div className="text-sm text-gray-500 font-zen-maru">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 今後の目標 */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 font-zen-maru">
          <Target size={20} />
          今後の目標
        </h4>
        <div className="space-y-2">
          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
            <p className="text-gray-700 font-zen-maru">{personalInfo.goals.immediate}</p>
          </div>
          <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
            <p className="text-gray-700 font-zen-maru">{personalInfo.goals.longTerm}</p>
          </div>
          {personalInfo.goals.interests.map((interest, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p className="text-gray-700 font-zen-maru">{interest}</p>
            </div>
          ))}
        </div>
      </div>

      {/* コンタクト情報 */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2 font-zen-maru">
          <MapPin size={20} />
          連絡先
        </h4>
        <div className="space-y-2">
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 font-zen-maru">GitHub</div>
            <div className="text-gray-900 font-zen-maru flex items-center gap-2">
              <Github size={16} />
              {personalInfo.contacts.github.display}
            </div>
          </div>
          <div className="p-3 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 font-zen-maru">場所</div>
            <div className="text-gray-900 font-zen-maru">
              {personalInfo.location}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
