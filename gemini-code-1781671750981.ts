// New target category state
  const [scanCategory, setScanCategory] = useState("Office & Systems Operations");
  const [customTargetKeyword, setCustomTargetKeyword] = useState("");

  // Upgraded Job Launch Scanner Trigger logic
  const handleLaunchScanner = () => {
    setIsScanning(true);
    const finalTarget = customTargetKeyword ? customTargetKeyword : scanCategory;
    setAuditLog(prev => [...prev, `Initializing Job Launch Scanner cron link targeting [${finalTarget}]...`]);
    
    setTimeout(() => {
      setIsScanning(false);
      setAuditLog(prev => [
        ...prev, 
        `Scan Complete: Found 2 new leads matching target group: "${finalTarget}".`, 
        "CRITICAL SAFEGUARD: Placed leads into Gatekeeper preview queue. No auto-dispatches executed."
      ]);
    }, 1500);
  };

  // ... (Inside your return block, replace the old Lead Generation box with this layout)

  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
    <div>
      <h3 className="text-sm font-bold text-blue-400 uppercase font-mono">📡 Advanced Lead Generation Control</h3>
      <p className="text-[11px] text-slate-400">Configure target profiles and trigger manual web scans to populate your staging area.</p>
    </div>
    
    {/* Profile Target Configuration Selector */}
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-slate-400 uppercase font-mono block">Select Scanner Profile Target:</label>
      <select 
        value={scanCategory}
        onChange={(e) => setScanCategory(e.target.value)}
        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-300 focus:outline-none focus:border-blue-500 font-sans"
      >
        <option value="Office & Systems Operations">Office & Systems Operations</option>
        <option value="Logistics & Supply Chain Coordination">Logistics & Supply Chain Coordination</option>
        <option value="Administrative Support & Document Control">Administrative Support & Document Control</option>
        <option value="Broad Search (All Systems & Computer Opportunities)">Broad Search (All Available Opportunities)</option>
      </select>
    </div>

    {/* Custom Search Keyword Parameter Override */}
    <div className="space-y-1.5">
      <label className="text-[10px] font-bold text-amber-500 uppercase font-mono block">Custom Keyword Override (Optional):</label>
      <input 
        type="text"
        placeholder="e.g., General Operations, Data Entry, Local Logistics"
        value={customTargetKeyword}
        onChange={(e) => setCustomTargetKeyword(e.target.value)}
        className="w-full bg-slate-950 border border-slate-800 rounded-lg p-2 text-xs text-slate-300 focus:outline-none focus:border-amber-500"
      />
    </div>
    
    <button
      onClick={handleLaunchScanner}
      disabled={isScanning}
      className={`w-full py-3 text-xs font-black uppercase rounded-xl tracking-wider transition ${
        isScanning 
          ? 'bg-amber-600 text-white animate-pulse cursor-not-allowed' 
          : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-950/40'
      }`}
    >
      {isScanning ? '⏳ Running Custom Target Scan...' : '🔍 Launch Lead Scanner'}
    </button>
  </div>