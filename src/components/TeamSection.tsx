import { ExternalLink, Users } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { TEAM_MEMBERS } from '../config/team';
import './TeamSection.css';

export const TeamSection: React.FC = () => {
  return (
    <section className="section-wrapper" id="team">
      <div className="site-container">
        <div className="section-header">
          <div className="section-kicker">
            <Users size={13} /> Engineering Collective
          </div>
          <h2 className="section-title">
            Built by Team <span style={{ color: 'var(--accent-cyan)' }}>DEFAULTERS</span>.
          </h2>
          <p className="section-description">
            An engineering team building evidence-driven software for more transparent procurement decisions.
          </p>
        </div>

        {/* 4 Developer Profiles */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => {
            const initials = member.name
              .split(' ')
              .map((n) => n[0])
              .join('');

            return (
              <div className="team-card" key={member.id}>
                <div className="team-avatar-box" title={member.name}>
                  {initials}
                </div>

                <h3 className="team-name">{member.name}</h3>
                {member.role && <div className="team-role">{member.role}</div>}

                <div className="team-social-links">
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={`${member.name}'s GitHub Profile`}
                    aria-label={`${member.name}'s GitHub Profile`}
                  >
                    <GithubIcon size={13} />
                    <span>GitHub</span>
                    <ExternalLink size={10} />
                  </a>

                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    title={`${member.name}'s LinkedIn Profile`}
                    aria-label={`${member.name}'s LinkedIn Profile`}
                  >
                    <LinkedinIcon size={13} />
                    <span>LinkedIn</span>
                    <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
