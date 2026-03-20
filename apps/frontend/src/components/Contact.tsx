import React from 'react';

export default function Contact() {
  return (
    <section className="py-24 px-8 bg-surface-container-lowest" id="contact">
      <div className="max-w-4xl mx-auto">
        <div
          className="bg-surface-container-highest rounded-t-lg flex items-center justify-between px-4 py-2 border-b border-outline-variant/20">
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
          </div>
          <span
            className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">session://contact_portal</span>
          <div className="w-12"></div>
        </div>
        <div className="bg-surface-container-low p-8 rounded-b-lg border-x border-b border-outline-variant/20">
          <div className="mb-8">
            <div className="font-label text-sm text-primary mb-2">Architect@remote-shell:~$ ./send_message.sh
            </div>
            <h2 className="font-headline text-3xl font-bold tracking-tight">INITIALIZE_COMMUNICATION</h2>
          </div>
          <form action="#" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase text-on-surface-variant">IDENTIFIER
                  (NAME)</label>
                <input
                  className="w-full bg-background border border-outline-variant/20 rounded p-3 text-sm focus:outline-none focus:border-primary transition-colors font-label"
                  placeholder="guest_user" type="text" />
              </div>
              <div className="space-y-2">
                <label className="font-label text-[10px] uppercase text-on-surface-variant">CALLBACK_URI
                  (EMAIL)</label>
                <input
                  className="w-full bg-background border border-outline-variant/20 rounded p-3 text-sm focus:outline-none focus:border-primary transition-colors font-label"
                  placeholder="user@domain.com" type="email" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="font-label text-[10px] uppercase text-on-surface-variant">DATA_PAYLOAD
                (MESSAGE)</label>
              <textarea
                className="w-full bg-background border border-outline-variant/20 rounded p-3 text-sm focus:outline-none focus:border-primary transition-colors font-label resize-none"
                placeholder="Enter message payload here..." rows={4}></textarea>
            </div>
            <button
              className="w-full bg-primary-container text-on-primary-container font-headline font-bold uppercase py-4 rounded tracking-widest hover:bg-primary transition-colors flex items-center justify-center gap-3"
              type="submit">
              EXECUTE_SEND <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
          <div
            className="mt-12 pt-8 border-t border-outline-variant/10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <a className="font-label text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase"
              href="#">GITHUB</a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase"
              href="#">LINKEDIN</a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase"
              href="#">TWITTER</a>
            <a className="font-label text-[10px] text-on-surface-variant hover:text-primary transition-colors uppercase"
              href="#">DOCKERHUB</a>
          </div>
        </div>
      </div>
    </section>
  );
}
