import hyphenStatsIcon from '../../../assets/images/hyphen-stats.svg';
import liquidityGuideIcon from '../../../assets/images/liquidity-guide.svg';

function LiquidityInfo() {
  return (
    <section className="grid grid-cols-2 gap-2.5">
      <div>
        <span className="mb-2 pl-5 text-[10px] font-bold uppercase text-hyphen-gray-200">
          Top pools
        </span>
        <a
          className="mt-1.5 flex h-32 flex-col items-start justify-between rounded-lg border border-dashed p-5 text-hyphen-purple"
          href="https://hyphen-info.biconomy.io/"
          target="_blank"
          rel="noreferrer"
        >
          Explore Hyphen Stats.
          <img src={hyphenStatsIcon} alt="Hyphen info" className="mt-1.5" />
        </a>
      </div>
      <div>
        <span className="mb-2 pl-5 text-[10px] font-bold uppercase text-hyphen-gray-200">
          Learn more
        </span>
        <a
          className="mt-1.5 flex h-32 flex-col items-start justify-between rounded-lg border border-dashed p-5 text-hyphen-purple"
          href="https://hyphen-info.biconomy.io/"
          target="_blank"
          rel="noreferrer"
        >
          Check out our Liquidity Pool guide.
          <img
            src={liquidityGuideIcon}
            alt="Liquidity guide"
            className="mt-1.5"
          />
        </a>
      </div>
    </section>
  );
}

export default LiquidityInfo;
