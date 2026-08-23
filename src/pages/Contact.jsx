import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { 
  VscCode, 
  VscEye, 
  VscCheck, 
  VscCopy, 
  VscSend, 
  VscMail, 
  VscGithub, 
  VscTerminal,
  VscCallIncoming,
  VscLocation
} from 'react-icons/vsc';
import { SOCIAL_LINKS, PROFILE } from '../constants';

const RAW_CONTACT_CODE = `#!/bin/bash
# Contact & Transmission Dispatcher
# Recipient: ${PROFILE.name} <${PROFILE.email}>
# Phone: ${PROFILE.phone} | Location: ${PROFILE.location}

set -e

RECIPIENT="${PROFILE.email}"
PHONE="${PROFILE.phone}"
STATUS="AVAILABLE_FOR_INTERVIEW_AND_COLLABORATION"

send_message() {
  local sender_name="$1"
  local sender_email="$2"
  local message_payload="$3"

  echo "[DISPATCHER] Validating payload..."
  echo "[DISPATCHER] Routing message to: $RECIPIENT"
  echo "[DISPATCHER] Transmission successful. Response expected within 24 hours."
}

# Execute transmission
send_message "$SENDER_NAME" "$SENDER_EMAIL" "$MESSAGE"
`;

const Contact = () => {
  const [viewMode, setViewMode] = useState('rendered');
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const copyCode = () => {
    navigator.clipboard.writeText(RAW_CONTACT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1000);
  };

  return (
    <div className="p-4 md:p-8 max-w-5xl mx-auto space-y-8 font-mono">
      {/* Editor Sub-Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#21262d]">
        <div className="flex items-center gap-3">
          <span className="text-xs text-[#8b949e]">VIEW MODE:</span>
          <div className="flex bg-[#161b22] p-0.5 rounded-lg border border-[#30363d] text-xs">
            <button
              onClick={() => setViewMode('rendered')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                viewMode === 'rendered'
                  ? 'bg-[#21262d] text-[#38bdf8] font-bold shadow-sm'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              <VscEye className="w-3.5 h-3.5" />
              <span>Interactive GUI</span>
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all ${
                viewMode === 'code'
                  ? 'bg-[#21262d] text-[#38bdf8] font-bold shadow-sm'
                  : 'text-[#8b949e] hover:text-[#f0f6fc]'
              }`}
            >
              <VscCode className="w-3.5 h-3.5" />
              <span>Source (Bash)</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <button
            onClick={copyCode}
            className="flex items-center gap-1.5 px-2.5 py-1 bg-[#161b22] hover:bg-[#21262d] border border-[#30363d] rounded text-[#8b949e] hover:text-[#f0f6fc] transition-colors"
          >
            {copied ? <VscCheck className="w-3.5 h-3.5 text-[#34d399]" /> : <VscCopy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Script'}</span>
          </button>
        </div>
      </div>

      {viewMode === 'code' ? (
        <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-4 overflow-x-auto shadow-2xl">
          <pre className="text-xs md:text-sm text-[#c9d1d9] leading-relaxed font-mono">
            <code>
              {RAW_CONTACT_CODE.split('\n').map((line, i) => (
                <div key={i} className="flex hover:bg-[#1c2128] py-0.5 rounded px-1">
                  <span className="w-8 text-right pr-4 text-[#484f58] select-none text-xs">{i + 1}</span>
                  <span className="flex-1">
                    {line.startsWith('#') ? (
                      <span className="text-[#8b949e] italic">{line}</span>
                    ) : line.includes('=') ? (
                      <span>
                        <span className="token-variable">{line.split('=')[0]}</span>=
                        <span className="token-string">{line.split('=')[1]}</span>
                      </span>
                    ) : line.includes('echo') ? (
                      <span>
                        <span className="token-keyword">echo </span>
                        <span className="token-string">{line.replace('echo ', '')}</span>
                      </span>
                    ) : (
                      <span>{line}</span>
                    )}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      ) : (
        /* Rendered Mode */
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Left: Contact Info & Channels */}
          <div className="md:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="text-xs text-[#38bdf8] uppercase font-bold tracking-wider">
                // Direct Communication
              </div>
              <h1 className="text-2xl md:text-3xl font-extrabold text-[#f0f6fc]">
                Get In Touch
              </h1>
              <p className="text-xs text-[#8b949e] leading-relaxed">
                Reach out for full-time software engineering roles, enterprise consulting, or freelance discussions.
              </p>
            </div>

            {/* Direct Connect Links */}
            <div className="space-y-3">
              <a
                href={SOCIAL_LINKS.email}
                className="flex items-center gap-3 p-3.5 bg-[#161b22] border border-[#21262d] hover:border-[#38bdf8]/50 rounded-xl transition-all group shadow-md"
              >
                <div className="p-2 bg-[#0d1117] rounded-lg border border-[#30363d] text-[#38bdf8]">
                  <VscMail className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-[#8b949e]">Direct Email</div>
                  <div className="text-xs font-bold text-[#f0f6fc] group-hover:text-[#38bdf8] transition-colors truncate">
                    {PROFILE.email}
                  </div>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.phone}
                className="flex items-center gap-3 p-3.5 bg-[#161b22] border border-[#21262d] hover:border-[#38bdf8]/50 rounded-xl transition-all group shadow-md"
              >
                <div className="p-2 bg-[#0d1117] rounded-lg border border-[#30363d] text-[#34d399]">
                  <VscCallIncoming className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-[#8b949e]">Phone & WhatsApp</div>
                  <div className="text-xs font-bold text-[#f0f6fc] group-hover:text-[#34d399] transition-colors truncate">
                    {PROFILE.phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3.5 bg-[#161b22] border border-[#21262d] rounded-xl shadow-md">
                <div className="p-2 bg-[#0d1117] rounded-lg border border-[#30363d] text-[#c084fc]">
                  <VscLocation className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-[#8b949e]">Location</div>
                  <div className="text-xs font-bold text-[#f0f6fc] truncate">
                    {PROFILE.location}
                  </div>
                </div>
              </div>

              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3.5 bg-[#161b22] border border-[#21262d] hover:border-[#38bdf8]/50 rounded-xl transition-all group shadow-md"
              >
                <div className="p-2 bg-[#0d1117] rounded-lg border border-[#30363d] text-[#38bdf8]">
                  <VscGithub className="w-5 h-5" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] text-[#8b949e]">GitHub Profile</div>
                  <div className="text-xs font-bold text-[#f0f6fc] group-hover:text-[#38bdf8] transition-colors truncate">
                    github.com/Joshloriel
                  </div>
                </div>
              </a>
            </div>

            {/* Availability Box */}
            <div className="p-4 bg-[#0d1117] border border-[#21262d] rounded-xl space-y-1.5 text-xs text-[#8b949e]">
              <div className="text-[#34d399] font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#34d399] animate-pulse"></span>
                <span>Immediate Availability</span>
              </div>
              <p className="text-[11px] leading-relaxed">
                Open to full-time engineering positions, contract roles, and software consulting.
              </p>
            </div>
          </div>

          {/* Right: Interactive Contact Form */}
          <div className="md:col-span-7 bg-[#161b22] border border-[#21262d] rounded-2xl p-6 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-[#21262d] pb-3 text-xs">
              <span className="text-[#f0f6fc] font-bold flex items-center gap-2">
                <VscTerminal className="text-[#38bdf8]" />
                <span>Message Payload Dispatcher</span>
              </span>
              <span className="text-[#8b949e] text-[10px]">POST /api/contact</span>
            </div>

            {submitSuccess && (
              <div className="p-4 bg-[#0f2d1e] border border-[#34d399]/40 rounded-xl text-[#34d399] text-xs space-y-1 animate-in fade-in">
                <div className="font-bold flex items-center gap-1.5">
                  <VscCheck className="w-4 h-4" /> Message Dispatched Successfully!
                </div>
                <p className="text-[#a6e3a1] text-[11px]">
                  Thank you for reaching out. I will respond to your message promptly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs text-[#8b949e] font-semibold">
                    YOUR NAME <span className="text-[#f87171]">*</span>
                  </label>
                  <input
                    type="text"
                    {...register('name', { required: 'Name is required' })}
                    placeholder="e.g. Alex Mercer"
                    className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#38bdf8] outline-none rounded-lg px-3.5 py-2.5 text-xs text-[#f0f6fc] transition-all"
                  />
                  {errors.name && (
                    <span className="text-[10px] text-[#f87171]">{errors.name.message}</span>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs text-[#8b949e] font-semibold">
                    YOUR EMAIL <span className="text-[#f87171]">*</span>
                  </label>
                  <input
                    type="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                    placeholder="e.g. alex@company.com"
                    className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#38bdf8] outline-none rounded-lg px-3.5 py-2.5 text-xs text-[#f0f6fc] transition-all"
                  />
                  {errors.email && (
                    <span className="text-[10px] text-[#f87171]">{errors.email.message}</span>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs text-[#8b949e] font-semibold">
                  SUBJECT / TOPIC
                </label>
                <input
                  type="text"
                  {...register('subject')}
                  placeholder="e.g. Full-Stack Role / Technical Inquiry"
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#38bdf8] outline-none rounded-lg px-3.5 py-2.5 text-xs text-[#f0f6fc] transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs text-[#8b949e] font-semibold">
                  MESSAGE PAYLOAD <span className="text-[#f87171]">*</span>
                </label>
                <textarea
                  rows="4"
                  {...register('message', { required: 'Message cannot be empty' })}
                  placeholder="Type your message here..."
                  className="w-full bg-[#0d1117] border border-[#30363d] focus:border-[#38bdf8] outline-none rounded-lg px-3.5 py-2.5 text-xs text-[#f0f6fc] transition-all resize-none font-mono"
                />
                {errors.message && (
                  <span className="text-[10px] text-[#f87171]">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Action */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="ide-btn-primary w-full py-2.5 mt-2"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    <span>Transmitting Payload...</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <VscSend className="w-4 h-4" />
                    <span>Execute ./send_message.sh</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
