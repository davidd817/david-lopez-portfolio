# Selected Work – Implementation Specification

**Version:** 1.0 – Approved functional baseline  
**Date:** 3 August 2026  
**Owner:** David López Diego  
**Implementation target:** Existing Next.js + TypeScript + Tailwind CSS portfolio repository  
**Primary consumer:** Codex or another implementation-focused developer/agent

> This document is the official functional specification for rebuilding the Selected Work section. It defines what must be built, how the six projects relate to one another, which content and assets are approved, and how implementation quality will be evaluated. It intentionally avoids final production code.

## 1. Executive decision

Selected Work will contain six project experiences, ordered by strategic importance:

1. **AFM-Based Nanomechanical Characterization of Living Extremophile Bacteria** — Flagship · Doctoral research case study
2. **Nanomaterial-Enabled Biosensors for Molecular Detection** — Primary · Publication-driven research portfolio
3. **From Material Structure to Thermoelectric Performance** — Primary · Functional-materials and transport-metrology case study
4. **Advanced Materials Characterisation & Scientific Instrumentation** — Supporting platform · Technical capability portfolio
5. **Engineering Mixed-Matrix Membranes for Gas Separation** — Secondary · Master’s materials-research case study
6. **Independent Data & Software Projects** — Secondary · Independent computational-project portfolio

The narrative progresses from deep doctoral research to published translation, functional-material metrology, cross-technique breadth, earlier full-cycle materials research and independent computational development.

## 2. Global coherence review

### 2.1 Narrative coherence

- SW-01 establishes doctoral-level depth, end-to-end ownership and advanced AFM nanometrology.
- SW-02 adds peer-reviewed translational evidence across nine nanomaterial-enabled biosensor studies.
- SW-03 broadens the profile into transport metrology, flexible materials and custom scientific instrumentation.
- SW-04 consolidates technical breadth and explains how multiple instruments become an integrated decision framework.
- SW-05 shows an earlier complete materials-research cycle, from formulation through functional gas-separation performance.
- SW-06 closes the section with scientific automation, self-directed software development and honest exploratory analytics.

### 2.2 Redundancy controls

| Overlap | Resolution |
| --- | --- |
| AFM in SW-01, SW-02, SW-04 and SW-06 | SW-01 owns biological nanomechanics; SW-02 owns biosensor-interface validation; SW-04 owns capability classification; SW-06 owns automated force-curve processing. Use cross-links instead of repeated explanations. |
| Thermoelectric methods in SW-03 and SW-04 | SW-03 provides the deep project narrative. SW-04 provides only the capability summary and links to SW-03. |
| Biosensors in SW-02 and SW-04 | SW-02 provides portfolio evidence and publications. SW-04 uses biosensors only as an example of cross-technique characterisation. |
| Materials characterisation across most projects | Keep project pages application-specific; reserve the universal method-selection philosophy and experience matrix for SW-04. |

### 2.3 Visual coherence

- The landing page remains text-led; project images are not used as card thumbnails.
- All internal pages share the same hero, snapshot, figure, metric, capability and navigation systems.
- Each project can use a different page composition, but shared components must retain identical spacing, typography, border, caption and interaction behaviour.
- Conceptual composites must be labelled as conceptual or schematic; experimental images and real UI screenshots must be identified as such.
- Dense figures support click/tap enlargement. Critical information must never be available only inside an image.

## 3. Existing implementation baseline

The current repository uses Next.js 14, TypeScript, Tailwind CSS, the App Router, a central `data/site.ts`, a `SelectedWork.tsx` landing component, a dynamic `/work/[slug]` route and a single generic `WorkDetail.tsx`. The current work-detail model only supports context, methodology, impact and demonstrated capabilities.

The implementation must evolve from one generic snapshot template into a reusable section-based case-study system. Global site data should remain separate from large project content.

### Recommended information architecture

- `data/site.ts`: global site identity, navigation, experience and global publications only.
- `data/work/index.ts`: ordered project registry and landing-card data.
- `data/work/sw01-afm.ts` through `sw06-data-software.ts`: approved project content and metadata.
- `types/work.ts`: shared project, section, asset, publication and link definitions.
- `components/work/`: reusable Selected Work components and section renderers.
- `public/images/work/<project>/`: final implementation assets copied from this package.

### Existing URL migration

| Existing route | New canonical route |
| --- | --- |
| /work/afm-force-curve-analysis | /work/afm-nanomechanics-extremotolerant-bacteria |
| /work/materials-characterization-rd | /work/advanced-materials-characterisation |
| /work/thermoelectric-materials | /work/thermoelectric-materials-metrology |
| /work/mixed-matrix-membranes | /work/mixed-matrix-membranes-gas-separation |
| /work/analytics-training-projects | /work/independent-data-software-projects |
| No existing route | /work/nanomaterial-biosensors-molecular-detection |

All old routes must redirect to the new canonical routes so that existing links do not break.

## 4. Selected Work landing-page specification

### Recommended section copy

- **Eyebrow:** Selected Work
- **Title:** Research, metrology and software translated into reproducible evidence.
- **Description:** Six case studies spanning AFM biophysics, published biosensors, thermoelectric materials, cross-technique characterisation, polymer membranes and scientific software.

### Desktop hierarchy

- Row 1: SW-01 as a full-width flagship card.
- Row 2: SW-02 and SW-03 as equal primary cards.
- Row 3: SW-04 as a full-width capability-platform card.
- Row 4: SW-05 and SW-06 as equal supporting cards.
- Mobile and narrow tablet: all cards stack in project order.

### Required card fields

- Category
- Title
- 35-55 word description
- Up to four proof points
- Maximum six technology tags
- Status
- Project-specific CTA
- Priority/tier for layout only

The full card must be clickable. Keyboard focus must be visible. Hover movement must be subtle and disabled for reduced-motion users.

## 5. Shared internal-page experience

### 5.1 Reusable component system

| Component | Functional responsibility |
| --- | --- |
| CaseStudyHero | Label, title, subheadline, opening text and optional supporting visual. |
| ProjectSnapshot | Compact factual cards; 2-4 columns depending on viewport. |
| CaseStudyNav | Sticky desktop in-page navigation generated from approved top-level groups; compact mobile selector. |
| RichTextSection | Readable prose with controlled measure and heading hierarchy. |
| Callout | Evidence, caution, central question or interpretation statement. |
| ProcessFlow | Responsive connected steps; horizontal on desktop, vertical on mobile. |
| FigureBlock | Image, alt text, caption, provenance label and optional accessible enlargement. |
| MetricGrid | Rounded result cards with value, label and contextual note. |
| EvidenceChain | Connected evidence types and interpretation. |
| SkillCluster | Grouped capability cards, not an undifferentiated badge cloud. |
| TechnologyGroup | Grouped tools and methods. |
| PublicationTimeline | Compact chronological overview. |
| PublicationGrid | Reuse the visual language of the current main-site publications. |
| PortfolioMatrix | Desktop table; mobile stacked cards. |
| CapabilityMatrix | Desktop table; mobile grouped cards. |
| ScreenshotGallery | Scroll-snap or grid gallery for application screenshots. |
| DisclosureNote | Ongoing research, unpublished work or prototype status. |
| ExternalLinkGroup | Conditional buttons for repositories, publications, demos and related cases. |

### 5.2 In-page navigation

Long pages must not expose every small heading in the navigation. Use the project-specific navigation groups listed in each package. The desktop version may be sticky; the mobile version must remain compact and keyboard accessible.

### 5.3 Image and figure behaviour

- Use `next/image` or equivalent optimised rendering, preserving aspect ratio and avoiding crops on scientific figures.
- Hero-support conceptual images load eagerly; all later figures load lazily.
- Images with embedded text or multi-panel data must support accessible enlargement with keyboard close, Escape support and focus return.
- Every image requires alt text, a visible caption and a provenance value: conceptual, experimental, screenshot or conceptual+data.
- Do not use stock laboratory imagery. Do not add institutional logos unless use is authorised.
- Critical claims must also appear in HTML text or metric cards, never only inside an image.

### 5.4 Responsive and accessibility rules

- Body copy target measure: approximately 65-78 characters per line on desktop.
- Snapshot, metric and skill cards stack without horizontal overflow.
- Scientific tables become grouped cards on mobile.
- Text contrast must meet WCAG AA; information cannot depend on colour alone.
- External links have descriptive labels and visible focus states.
- Use semantic headings, figure/figcaption, lists and tables with accessible headers.
- Respect reduced-motion preferences and avoid non-essential animation.

## 6. Global content and integrity rules

- Do not link to the former Google Sites pages.
- Do not present exploratory analytics as production systems or commercial impact.
- Do not present personal software prototypes as medical, clinical or diagnostic tools.
- Do not expose complete unpublished datasets, final statistical tables or publication-ready figures unless explicitly approved later.
- Use rounded, selected quantitative results where the approved copy specifies them.
- Preserve cautious language around mechanisms, causality, defects, recovery and validation.
- Official publication titles remain unchanged.
- Maintain consistent English spelling within each page; do not silently rewrite approved scientific terminology.

## 7. Cross-project navigation

| Source project | Recommended related links |
| --- | --- |
| SW-01 | Related AFM automation → SW-06 |
| SW-02 | Characterisation capability platform → SW-04; See all publications → main Publications section |
| SW-03 | Advanced characterisation platform → SW-04 |
| SW-04 | Deep dives → SW-01, SW-02 and SW-03 |
| SW-05 | Advanced characterisation platform → SW-04 |
| SW-06 | Related AFM research → SW-01; GitHub profile; DavidTrain live prototype |

## 8. Asset registry

| Project | Source file | Package path | Provenance | Required placement |
| --- | --- | --- | --- | --- |
| SW-01 | Imagen_ProyectoAFM.png | assets/sw-01/afm-project-overview.png | conceptual | After Project Snapshot and before the detailed Overview/Scientific Challenge. |
| SW-01 | imagen(28).png | assets/sw-01/afm-helios-growth-states.png | experimental | After Overview or inside the morphology/physiological-state section. |
| SW-01 | imagen(29).png | assets/sw-01/bacillus-growth-phases.png | experimental | Optional support within Key Findings or physiological-state discussion. |
| SW-01 | imagen(30).png | assets/sw-01/afm-indentation-deformation.png | experimental | Before Key Findings, near the section defining reversible and destructive indentation ranges. |
| SW-01 | imagen(32).png | assets/sw-01/stiffness-vs-humidity.png | experimental | Immediately after Key Findings as the main quantitative anchor. |
| SW-01 | imagen(33).png | assets/sw-01/kelvin-surface-potential.png | experimental | Within Measurement Modes, immediately after the KPFM/Kelvin subsection. |
| SW-02 | Imagen_principal_Biosensor.png | assets/sw-02/hero-biosensor-platform.png | conceptual | Hero-support visual directly after the textual hero or integrated beside it on wide screens. |
| SW-02 | Interface_construction_Biosensor.png | assets/sw-02/interface-construction-validation.png | conceptual | After Characterisation as Part of Development and before Building an Evidence Chain. |
| SW-03 | Imagen1.png | assets/sw-03/hero-thermoelectric-materials.png | conceptual | Hero-support visual near the top of the page. |
| SW-03 | Imagen2.jpg | assets/sw-03/flexible-bite3-pla-laminate.jpg | experimental | Inside Case Study 01, after Context and before Making Bending Measurable. |
| SW-04 | Imagen_Caracterizacion.png | assets/sw-04/materials-characterisation-overview.png | conceptual | After Hero and Capability Snapshot as the page’s primary visual anchor. |
| SW-05 | ChatGPT Image 2 ago 2026, 19_07_54.png | assets/sw-05/mixed-matrix-membranes-overview.png | conceptual+data | After Project Snapshot and before The Separation Challenge. |
| SW-06 | imagen(45).png | assets/sw-06/davidtrain-dashboard.png | screenshot | First image in the Training Assessment and Reporting Tool gallery. |
| SW-06 | imagen(46).png | assets/sw-06/davidtrain-routines.png | screenshot | Second image in the Training Assessment and Reporting Tool gallery. |
| SW-06 | imagen(47).png | assets/sw-06/davidtrain-progress.png | screenshot | Third image in the Training Assessment and Reporting Tool gallery. |
| SW-06 | imagen(48).png | assets/sw-06/davidtrain-exercise-logging.png | screenshot | Fourth image in the Training Assessment and Reporting Tool gallery. |

## 9. Project implementation packages

# SW-01 — AFM-Based Nanomechanical Characterization of Living Extremophile Bacteria

| Field | Approved value |
| --- | --- |
| Order | 1 |
| Tier | Flagship |
| Page type | Doctoral research case study |
| Canonical slug | /work/afm-nanomechanics-extremotolerant-bacteria |
| Internal page title | AFM Nanomechanics of Viable Extremotolerant Bacteria |

## Objective within the portfolio

Establish the strongest evidence of doctoral-level experimental ownership by connecting live biological samples, AFM nanometrology, controlled environmental measurements, force-curve analysis and physical interpretation.

## Main message

David can design and execute an end-to-end AFM workflow that converts delicate living bacterial samples and complex signals into reproducible evidence about nanoscale morphology, mechanics and environmental response.

## Priority audiences

- AFM and microscopy companies
- Biophysics and microbiology R&D groups
- Nanometrology and scientific-instrumentation teams
- Biotech, biomaterials and biosensor teams
- STEM recruiters and research leaders

## In-page navigation groups

Overview → Experimental strategy → Measurement modes → Data workflow → Key findings → Broader relevance

## Unique components

- Integrated project-overview figure
- Measurement reliability block
- Multimodal AFM evidence blocks
- Selected-results metric grid
- Research-status disclosure

## Approved assets and placement

| Asset | Type | Placement | Caption |
| --- | --- | --- | --- |
| assets/sw-01/afm-project-overview.png | Conceptual project overview | After Project Snapshot and before the detailed Overview/Scientific Challenge. | Conceptual overview of the complete AFM study, linking viable extremotolerant bacteria, topography, nanomechanics, force spectroscopy, humidity and Kelvin-probe measurements. |
| assets/sw-01/afm-helios-growth-states.png | Experimental AFM comparison | After Overview or inside the morphology/physiological-state section. | Representative AFM characterisation of Exiguobacterium sp. Helios on SiO2, comparing exponential and stationary growth states with height-profile and 3D topographic views. |
| assets/sw-01/bacillus-growth-phases.png | Experimental AFM comparison | Optional support within Key Findings or physiological-state discussion. | Representative AFM images of Bacillus subtilis across exponential, early-stationary and late-stationary growth phases. |
| assets/sw-01/afm-indentation-deformation.png | Experimental AFM evidence | Before Key Findings, near the section defining reversible and destructive indentation ranges. | Representative AFM indentation experiment showing mechanically induced deformation used to distinguish non-destructive measurements from structural failure. |
| assets/sw-01/stiffness-vs-humidity.png | Quantitative experimental result | Immediately after Key Findings as the main quantitative anchor. | Representative effective-stiffness trend across four bacterial strains under controlled relative-humidity conditions. |
| assets/sw-01/kelvin-surface-potential.png | Multimodal experimental evidence | Within Measurement Modes, immediately after the KPFM/Kelvin subsection. | Representative Kelvin-probe measurement showing complementary surface-potential contrast between bacterial regions and the substrate. |

## Implementation observations

- Remove the previously proposed generic AFM schematic from the final asset set.
- The integrated overview contains small embedded labels and must support click/tap enlargement.
- Before publication, verify that the conceptual overview uses terminology and units consistent with the page copy, particularly the stiffness unit shown in the illustration.
- Cross-link the Python force-curve workflow to SW-06 without duplicating the full software description.

## Project acceptance criteria

- My role and full workflow ownership are visible before the first third of the page.
- The page distinguishes experimental evidence from conceptual explanatory visuals.
- The humidity response and selected quantitative findings are visible but do not expose complete unpublished datasets.
- Measurement controls, calibration and uncertainty management are presented as core research work.
- All detailed figures can be enlarged accessibly on mobile and desktop.

## Definitive approved content

Contenido de la página interna
AFM Nanomechanics of Viable Extremotolerant Bacteria
How hydration and physiological state reshape bacterial cell-envelope mechanics

Bacterial survival under environmental stress depends not only on biochemical regulation, but also on the physical behaviour of the cell envelope.

In this doctoral research project, I developed an end-to-end Atomic Force Microscopy workflow to investigate how hydration, growth state and cell-envelope organisation influence bacterial morphology, effective stiffness, deformation and resistance to mechanical failure.

The study combines biological sample preparation, controlled-environment AFM, calibrated force spectroscopy, multimodal surface characterisation and reproducible scientific data analysis.

My objective was not simply to image bacterial cells, but to measure how their structure responds to environmental stress and convert that response into reliable physical evidence.

Project snapshot

Role
PhD Researcher and end-to-end experimental lead

Institutions
Institute of Micro and Nanotechnology, IMN-CNM, CSIC
In collaboration with the Biological Research Center, CIB-CSIC

Research scope
Four bacterial strains, multiple physiological states and relative humidity conditions from approximately 2% to 85%

Core methods
Atomic Force Microscopy, force spectroscopy, controlled-humidity measurements, SEM-assisted calibration and scientific Python

Research status
Ongoing doctoral research · Manuscript in preparation

Overview

This project investigates how Atomic Force Microscopy can be used as a quantitative measurement platform for delicate bacterial systems.

The research focuses on four Gram-positive strains:

Exiguobacterium sp. Helios
Exiguobacterium sibiricum
Exiguobacterium mexicanum
Bacillus subtilis

Rather than treating AFM exclusively as an imaging technique, I combined topographic, mechanical, adhesive and electrostatic measurements to study how bacterial envelopes respond to hydration, physiological state and controlled mechanical loading.

The research connects three levels of information:

nanoscale structure → mechanical response → environmental adaptation

The scientific challenge
Measuring bacterial mechanics without losing biological relevance

The bacterial cell envelope maintains cell shape, resists internal pressure and protects the organism from environmental stress.

Its mechanical behaviour can change with hydration, growth state and surface organisation. Measuring those changes reliably is difficult because biological samples are soft, heterogeneous and highly sensitive to preparation and measurement conditions.

Conventional high-resolution techniques may require fixation, staining, coating, vacuum conditions or extraction of cell-wall material. These procedures provide valuable information, but may also modify the structure being investigated.

AFM avoids many of these constraints, but introduces other challenges:

cells may move or deform during scanning;
the rigid substrate may influence local measurements;
humidity increases capillary adhesion;
contact-point detection is uncertain on soft samples;
repeated indentation may produce accumulated deformation;
instrumental variability must be separated from biological variability.

The challenge was therefore not simply to acquire images or force curves.

It was to develop a measurement workflow capable of distinguishing biological behaviour from preparation artefacts, environmental effects and instrumental drift.

Research objective

The central research question was:

How do hydration, physiological state and cell-envelope organisation determine the nanoscale mechanical response of extremotolerant bacteria?

To address this question, I investigated:

morphological differences between exponential and stationary growth phases;
effective stiffness across controlled humidity conditions;
the force required to produce comparable deformation;
the transition from reversible deformation to irreversible failure;
differences between bacterial strains;
nanoscale surface and filamentous structures;
local topographic, mechanical, adhesive and Kelvin-potential contrast.

The objective was not to assign a single stiffness value to each organism. It was to determine how mechanical behaviour changes with biological and environmental context.

Why extremotolerant bacteria?

Extremotolerant bacteria are valuable model systems because they have evolved strategies for surviving environmental conditions that damage many other microorganisms.

Exiguobacterium sp. Helios is particularly relevant because it was isolated from a solar-panel environment, where microorganisms experience water scarcity, radiation and temperature variation.

Related species such as E. sibiricum and E. mexicanum provide a basis for comparing organisms with different environmental backgrounds.

Bacillus subtilis was included as a well-established Gram-positive reference with a different survival strategy, including the capacity to initiate sporulation under adverse conditions.

Comparing these organisms under standardised experimental conditions helped identify both general hydration-dependent behaviour and strain-specific mechanical differences.

My role
Full ownership of the research workflow

I designed and executed the complete experimental and analytical workflow.

My responsibilities included:

experimental planning;
bacterial culture and sample preparation;
substrate selection and preparation;
cantilever selection and calibration;
AFM piezo calibration;
controlled-humidity experiments;
topographic and nanomechanical acquisition;
force–distance and indentation measurements;
destructive testing to identify mechanical-failure regimes;
AFM image processing;
Python-based force-curve analysis;
data selection and statistical analysis;
physical and biological interpretation;
scientific figure preparation;
manuscript development.

The project required working across experimental physics, microbiology, nanometrology, surface science and scientific data analysis.

I controlled the complete measurement chain—from biological sample preparation and instrument calibration to data processing, interpretation and scientific reporting.

Experimental strategy
Preserving the biological state

Bacterial cells were deposited directly onto silicon dioxide substrates without conventional chemical fixation.

Their viability was evaluated through recovery from the surface and subsequent regrowth in culture.

Before quantitative measurements, I acquired topographic images to identify intact cells, detect visible damage and select suitable regions of interest.

Mechanical measurements were preferentially collected near the highest part of each cell, reducing the relative influence of the rigid substrate.

Selecting a stable substrate

Silicon dioxide was selected because of its mechanical rigidity, chemical stability and compatibility with AFM measurements.

I avoided using polymer-based immobilisation layers as the standard measurement surface. Although materials such as poly-L-lysine improve adhesion, they may also introduce humidity-dependent swelling, additional mechanical deformation or unwanted interactions with the bacterial surface and AFM probe.

Direct deposition on SiO₂ reduced the number of intermediate materials involved in the measurement and provided a rigid reference surface for control experiments.

Calibrating the measurement system

Cantilever stiffness was determined using the Sader method, supported by SEM measurements of cantilever geometry and resonance analysis.

The AFM piezoelectric scanner was verified using dimensional calibration standards for the lateral and vertical axes.

Before measuring bacterial cells, force curves were collected on clean SiO₂ to determine the rigid-contact response and verify deflection sensitivity.

These controls helped identify:

instrumental drift;
sensitivity changes;
probe contamination;
changes in tip–substrate interaction;
humidity-dependent artefacts.
Minimising sample damage

Most measurements were performed in jumping mode.

In this mode, the AFM probe approaches the sample, records the interaction and retracts before moving to the next point. This reduces lateral forces compared with continuous contact scanning.

The approach was particularly important for weakly immobilised cells and delicate surface structures, which could otherwise be displaced, deformed or damaged.

Controlling humidity

The sample was measured inside an environmental chamber in which relative humidity was varied while temperature was monitored.

The complete experimental range extended from highly dry conditions to approximately 85% relative humidity.

Whenever possible, the same cells and surface regions were followed throughout the humidity cycle. This allowed each cell to act as its own reference and reduced the influence of natural differences between individual bacteria.

Reference measurements were also collected on exposed SiO₂ under each environmental condition.

Measurement modes

The workflow combined several complementary AFM measurements.

Topography

Topographic imaging was used to study:

cell height and morphology;
surface roughness;
peripheral folds;
nanoscale envelope organisation;
filamentous structures;
damage produced by indentation.

Height measurements were prioritised for small structures because lateral dimensions are affected by tip–sample convolution.

Force spectroscopy

Force–distance curves were used to determine how bacterial cells deform under controlled loading.

The raw displacement and cantilever-deflection signals were converted into force and indentation using calibrated instrument parameters.

Effective stiffness

The approximately linear region of the mechanical response was analysed to obtain an effective stiffness.

This value was treated as a comparative descriptor of the complete tip–cell system under defined conditions, rather than as a universal material constant.

Adhesion

Retraction curves and adhesion maps were used to investigate local tip–sample interactions.

The interpretation considered the influence of humidity and capillary forces.

Kelvin probe measurements

Conductive probes and electrically connected substrates were used to investigate apparent Kelvin-potential contrast.

The measurements provided information complementary to topography and mechanics, but were interpreted conservatively because humidity, geometry, capacitance and dielectric properties can affect the signal.

Defining a non-destructive measurement range

Before performing comparative measurements, I conducted controlled high-load indentation experiments.

The purpose was to identify the transition between:

reversible deformation;
residual deformation;
irreversible envelope failure;
near-complete cellular collapse;
final contact with the rigid substrate.

I compared force curves, changes in slope, indentation depth and topographic images acquired before and after loading.

The resulting evidence was used to define a lower indentation range for comparative measurements, designed to probe the bacterial envelope while minimising structural damage.

Destructive curves were limited to one per selected region to avoid cumulative effects.

From raw curves to reproducible parameters

Force curves collected from soft biological samples frequently contain baseline inclination, signal offsets, uncertain contact points and non-linear deformation.

To improve consistency, I developed a Python workflow that:

imports and organises the experimental files;
standardises curve orientation and format;
corrects baseline inclination and offsets;
identifies non-contact and contact regions;
estimates the tip–sample contact point;
converts displacement into force and indentation;
evaluates multiple candidate fitting windows;
compares fit quality;
extracts mechanical parameters;
flags uncertain curves for manual review;
exports the results for statistical analysis and visualisation.

The automated analysis was not treated as a black box.

Curves with ambiguous contact, excessive adhesion or insufficient fitting quality were reviewed individually.

The purpose of the code was not to remove scientific judgement, but to standardise repetitive decisions and improve reproducibility.

Data quality and statistical reasoning

The bacterium was treated as the experimental unit.

Repeated curves acquired on the same cell were considered technical replicates rather than independent biological observations.

Independent cultures were used to represent biological variability, and the same fitting, selection and exclusion criteria were applied across comparison groups.

This distinction prevented artificial inflation of sample size and supported a more defensible interpretation of the results.

Key findings
Hydration strongly changes mechanical behaviour

Increasing relative humidity produced a progressively more deformable bacterial response.

Under highly dry conditions, substantially greater force was required to reach a given indentation. At high humidity, comparable deformation could be reached using much lower loads.

In selected E. sp. Helios comparisons, the force difference between highly dry and humid conditions exceeded one order of magnitude.

This indicates that water does not merely change cellular dimensions. It changes how the bacterial envelope carries and redistributes mechanical load.

Physiological state influences mechanical resistance

Stationary-phase cells consistently required greater force to reach comparable deformation than exponentially growing cells.

The difference persisted across multiple humidity conditions, although its magnitude changed with hydration.

These results indicate that physiological state modifies the load-bearing organisation of the cell envelope.

Mechanistic explanations such as increased peptidoglycan cross-linking were treated as hypotheses unless supported by independent evidence.

Mechanical differences were not explained by size alone

The average height of E. sp. Helios remained broadly comparable between exponential and stationary phases, while its lateral morphology and mechanical response changed substantially.

Cells transitioned from a more elongated shape during exponential growth to a shorter and wider morphology in stationary phase.

The combination of similar height and different mechanical resistance suggests that the change cannot be explained simply by a larger cell body.

It points instead towards differences in geometry and envelope organisation.

The strains showed distinct mechanical profiles

The three Exiguobacterium species generally displayed greater effective stiffness and required higher forces for comparable indentation than Bacillus subtilis under standardised conditions.

Near ambient humidity, E. sp. Helios and E. sibiricum showed the highest effective-stiffness values, at approximately 21 N/m.

The differences became less pronounced at very high humidity, indicating that extensive hydration can dominate part of the mechanical response.

These results do not establish that one organism is universally more resistant than another. They show that bacterial strains exhibit distinguishable nanomechanical profiles when measured under comparable conditions.

AFM resolved nanoscale surface structures

High-resolution images revealed filamentous structures associated with the bacterial surface.

Because fragmented pili and flagella cannot always be distinguished unequivocally from morphology alone, the structures were described conservatively unless their dimensions and continuity supported a more specific assignment.

In E. sp. Helios, their average measured height was approximately 8 nm.

This demonstrated the ability of AFM to characterise delicate bacterial structures without staining or conductive coating.

Multimodal measurements improved interpretation

Topographic contrast alone cannot always determine whether two surface regions differ structurally, mechanically or chemically.

By combining topography, effective stiffness and adhesion, I identified regions of the cell envelope with distinct physical signatures.

The multimodal approach made it possible to test whether a morphological feature was accompanied by a consistent mechanical or interfacial response.

Selected results
4 bacterial strains

Compared under standardised physiological and environmental conditions.

Approximately 2–85% relative humidity

Controlled to investigate hydration-dependent mechanical behaviour.

More than one order of magnitude

Difference in the force required to reach comparable deformation between highly dry and humid conditions in selected experiments.

Approximately 21 N/m

Effective stiffness observed for the most mechanically resistant Exiguobacterium strains near ambient humidity.

Approximately 8 nm

Average height of filamentous surface structures measured by high-resolution AFM.

What this project demonstrates

This research demonstrates my ability to transform an open scientific question into a complete experimental and analytical strategy.

It shows that I can:

design multidisciplinary experiments;
operate and calibrate advanced instrumentation;
work with delicate and heterogeneous samples;
identify and control sources of uncertainty;
define meaningful measurement limits;
develop software for reproducible analysis;
distinguish technical from biological variability;
interpret complementary measurement channels;
troubleshoot experimental problems;
connect physical measurements with biological behaviour;
communicate complex results clearly.

The project demonstrates more than familiarity with an instrument.

It demonstrates the ability to connect preparation, measurement, calibration, code and interpretation into a coherent research workflow.

Broader relevance

The methodology can be transferred beyond the bacterial systems studied.

Biomaterials and soft matter

Characterisation of soft or hydration-sensitive materials whose mechanical properties change with environmental conditions.

Antimicrobial surfaces

Evaluation of how coatings or surface treatments affect bacterial adhesion, morphology and mechanical integrity.

Biosensors and biointerfaces

Characterisation of interfaces involving cells, proteins and functional biological layers.

Biofilms

Study of bacterial adhesion, extracellular structures and local mechanical organisation.

Responsive polymers and coatings

Analysis of materials that soften, swell or reorganise as humidity changes.

Scientific instrumentation

Development and validation of measurement workflows for complex samples.

Measurement-method development

Integration of calibration, reference controls, automated processing and manual quality review in experimental R&D.

Skills demonstrated
Experimental and scientific
Atomic Force Microscopy
Force spectroscopy
Bacterial nanomechanics
Biological sample preparation
Controlled-environment measurements
Experimental design
Mechanical indentation
Multimodal surface characterisation
Scientific interpretation
Instrumentation and metrology
Cantilever selection and calibration
Sader-method calibration
SEM-assisted dimensional characterisation
Piezoelectric-scanner calibration
Deflection-sensitivity calibration
Environmental-chamber operation
Drift and artefact detection
Measurement validation
Data and computation
Python
Force-curve processing
Baseline correction
Contact-point detection
Iterative fitting
Fit-quality assessment
Statistical analysis
Scientific visualisation
Reproducible workflows
Transferable capabilities
End-to-end research ownership
Critical decision-making
Experimental troubleshooting
Cross-disciplinary collaboration
Scientific writing
Technical reporting
Method development
Quality control
Tools and technologies

Microscopy and measurement
Atomic Force Microscopy · Jumping Mode · Dynamic Mode · Force Spectroscopy · Kelvin Probe Force Microscopy · Scanning Electron Microscopy

Calibration and instrumentation
Sader Method · Piezo Calibration Standards · Environmental Chamber · Resonance Analysis · Rigid-Substrate Controls

Analysis and software
Python · WSxM · OriginPro · ImageJ · Statistical Analysis · Scientific Data Processing

Biological methods
Bacterial Culture · Direct Deposition on SiO₂ · Sample Washing · Viability Assessment · Physiological-Phase Selection

Research status and disclosure

This case study presents selected findings from ongoing doctoral research conducted at IMN-CNM, CSIC, in collaboration with CIB-CSIC.

The associated scientific manuscript is currently in preparation.

To protect unpublished work, the public case study focuses on:

the research problem;
the experimental strategy;
the principal reproducible trends;
selected rounded results;
the technical decisions behind the methodology;
the capabilities demonstrated by the project.

Complete datasets, final statistical analyses and publication figures will be added or linked after the appropriate publication process.

Final perspective

A reliable nanoscale result does not begin when the AFM probe touches the sample.

It begins with the scientific question, sample preparation, calibration strategy, environmental control and definition of what the measurement can—and cannot—demonstrate.

I developed an end-to-end workflow for converting delicate biological samples and complex AFM signals into reproducible evidence about nanoscale structure, mechanics and environmental response.

4. Estructura visual recomendada
1. Hero image
Contenido

Una imagen AFM de alta resolución con varias bacterias claramente reconocibles sobre el sustrato.

Objetivo

Comunicar inmediatamente:

biological system + nanoscale measurement + technical quality

Caption

AFM topography of viable extremotolerant bacteria deposited directly on a silicon dioxide substrate.

No utilizaría como imagen principal una placa de cultivo, una fotografía genérica del equipo ni una gráfica aislada.

2. Flujo de trabajo completo

Debe aparecer después de My role o al inicio de Experimental strategy.

Flujo

Research question
→ Bacterial culture
→ Direct deposition on SiO₂
→ Cantilever and piezo calibration
→ Controlled-humidity AFM
→ Topography and force spectroscopy
→ Python processing
→ Statistical analysis
→ Physical interpretation
→ Manuscript preparation

Caption

End-to-end workflow connecting bacterial preparation, nanoscale measurement and reproducible data interpretation.

# SW-02 — Nanomaterial-Enabled Biosensors for Molecular Detection

| Field | Approved value |
| --- | --- |
| Order | 2 |
| Tier | Primary |
| Page type | Publication-driven research portfolio |
| Canonical slug | /work/nanomaterial-biosensors-molecular-detection |
| Internal page title | Nanomaterial-Enabled Biosensors for Molecular Detection |

## Objective within the portfolio

Demonstrate contribution to a sustained, peer-reviewed biosensor research portfolio in which surface characterisation and interface validation support real analytical platforms.

## Main message

David connects nanomaterial interfaces, programmable DNA recognition, multimodal characterisation and analytical performance across nine peer-reviewed biosensor studies.

## Priority audiences

- Biosensor and molecular-diagnostics R&D
- Biotech and medtech companies
- Nanomaterials and electrochemical-device teams
- Point-of-care and lab-on-chip groups
- Technology-transfer and scientific-instrumentation teams

## In-page navigation groups

Overview → Platform strategy → Research portfolio → My contribution → Evidence chain → Publications

## Unique components

- Hero research-portfolio visual
- Modular architecture diagram
- Portfolio matrix
- Publication mini-timeline
- Nine-publication grid
- Successive-interface construction figure

## Approved assets and placement

| Asset | Type | Placement | Caption |
| --- | --- | --- | --- |
| assets/sw-02/hero-biosensor-platform.png | Conceptual portfolio overview | Hero-support visual directly after the textual hero or integrated beside it on wide screens. | Nanomaterial-enabled sensing interfaces combining 2D materials, programmable DNA structures, molecular recognition and complementary analytical readouts. |
| assets/sw-02/interface-construction-validation.png | Conceptual methodology and validation overview | After Characterisation as Part of Development and before Building an Evidence Chain. | Progressive interface construction and validation, from bare electrode to nanomaterial deposition, DNA functionalisation and target-triggered signal generation. |

## Implementation observations

- Use nine peer-reviewed studies, not eight.
- The Selected Publications section must reuse the visual publication-card pattern already present on the main website.
- Add a compact 2023-2026 timeline above the publication grid.
- Keep the contribution wording precise: physical development, characterisation, interface validation, interpretation and publication support; do not imply sole ownership of every platform.
- The two dense overview figures require accessible enlargement.

## Publication timeline and DOI registry

| Year | Publication | Journal | DOI |
| --- | --- | --- | --- |
| 2023 | Multiplex Portable Biosensor for Bacteria Detection | Biosensors | 10.3390/bios13110958 |
| 2024 | A signal off-on fluorescence bioassay based on 2D-MoS2-tetrahedral DNA bioconjugate for rapid virus detection | Talanta | 10.1016/j.talanta.2023.125497 |
| 2024 | Rapid and simple viral protein detection by functionalized 2D MoS2/graphene electrochemiluminescence aptasensor | Talanta | 10.1016/j.talanta.2024.126293 |
| 2024 | Bismuthene - Tetrahedral DNA nanobioconjugate for virus detection | Biosensors and Bioelectronics | 10.1016/j.bios.2024.116500 |
| 2025 | Tetrahedral DNA nanostructures, graphene and carbon nanodots-based electrochemiluminescent biosensor for BRCA1 gene mutation detection | Talanta | 10.1016/j.talanta.2024.127182 |
| 2025 | Advancing diagnostics with BODIPY-bismuthene DNA biosensors | Nanoscale | 10.1039/D4NR05258G |
| 2025 | Dendrimer-based DNA biosensor for HIV virus detection | Biosensors and Bioelectronics | 10.1016/j.bios.2025.118014 |
| 2025 | MoS2-DNA tetrahedral bioconjugate for high-performance DNA biosensors: application in viral infection diagnostics | Microchimica Acta | 10.1007/s00604-025-07084-2 |
| 2026 | Covalent Organic Polymer-Based Biosensor for Autism Biomarker Detection | Microchimica Acta | 10.1007/s00604-025-07794-7 |

## Project acceptance criteria

- Visitors understand the modular target/material/recognition/readout logic without reading all nine studies.
- The page clearly separates portfolio outcomes from David’s specific contribution.
- Nine publications appear with title, journal, year, short description and DOI link.
- The portfolio matrix becomes stacked cards on narrow screens.
- The page feels like a research portfolio, not a publication list.

## Definitive approved content

2. Tarjeta de Selected Work
Category

Biosensors · Nanomaterials · Molecular Detection

Title

Nanomaterial-Enabled Biosensors for Molecular Detection

Card description

Development of eight published biosensing platforms combining 2D materials, programmable DNA structures and electrochemical, electrochemiluminescent and fluorescence readouts. The portfolio spans bacterial and viral pathogens, genetic mutations and emerging biomarkers, including portable systems and platforms tested with real or clinical samples.

Proof points

8 peer-reviewed studies
2023–2026 research portfolio
Pathogens, mutations and biomarkers
Portable and real-sample detection

Technologies

2D Materials · DNA Nanostructures · Electrochemistry · ECL · Fluorescence · Surface Characterisation

Status

8 peer-reviewed publications

CTA

Explore the research portfolio

3. Página interna lista para copiar
Nanomaterial-Enabled Biosensors for Molecular Detection
From 2D-material interfaces and programmable DNA structures to portable devices and real-sample validation

Molecular detection requires more than a selective biological probe.

The recognition element must be integrated into a stable sensing interface, the transducer must convert the recognition event into a measurable signal, and the complete platform must remain sufficiently reproducible, selective and sensitive when exposed to complex samples.

Across eight peer-reviewed studies, this research portfolio explored how 2D materials, DNA nanostructures and complementary transduction strategies can be combined to detect bacterial and viral pathogens, proteins, genetic mutations and emerging biomarkers.

The work progressed from nanoscale material integration and electrode construction to portable multiplex systems and platforms tested in saliva, serum, plasma, nasopharyngeal samples and clinical specimens.

The central objective was to connect material design, molecular recognition and signal generation within complete and experimentally validated biosensing platforms.

Project snapshot

Research area
Nanomaterial-enabled biosensors and molecular diagnostics

Publication portfolio
Eight peer-reviewed studies published between 2023 and 2026

Detection targets
Bacterial DNA · Viral DNA and RNA · Viral proteins · Genetic mutations · miRNA biomarkers

Nanomaterials
Molybdenum disulphide · Graphene nanosheets · Few-layer bismuthene · Carbon nanodots · Covalent organic polymers

Biorecognition strategies
DNA probes · Aptamers · Tetrahedral DNA nanostructures · DNA dendrimers

Signal transduction
Electrochemistry · Electrochemiluminescence · Fluorescence

Applications
Portable detection · Multiplex analysis · Pathogen screening · Genetic analysis · Biomarker detection

Research environment
IMN-CNM, CSIC, together with university, nanoscience, biomedical and hospital research teams

Overview

The portfolio addresses a recurring technological question:

How can nanoscale materials and biomolecular recognition elements be assembled into interfaces capable of converting a specific molecular interaction into a reliable analytical signal?

Although each platform targeted a different analyte, the studies followed a common development logic:

select the sensing architecture
→ engineer the nanomaterial interface
→ immobilise the recognition element
→ characterise successive construction stages
→ optimise experimental conditions
→ measure the recognition signal
→ evaluate sensitivity and selectivity
→ test stability and complex samples

This modular approach made it possible to adapt the platform to different targets without relying on a single material, recognition mechanism or detection technique.

The detection challenge

Conventional molecular-detection methods can provide excellent analytical performance, but may require centralised instrumentation, trained personnel, sample preparation or amplification stages.

Biosensors are being investigated as complementary tools with potential advantages such as:

low sample consumption;
compact instrumentation;
rapid signal acquisition;
compatibility with disposable electrodes;
potential for multiplexing;
adaptability to different molecular targets;
integration with portable electronics.

Achieving those advantages is technically demanding.

A highly selective probe does not guarantee a high-performance sensor. Its orientation, surface density and accessibility influence the recognition event. The morphology and conductivity of the transducer affect signal generation. Aggregation, incomplete coverage, material loss or non-specific adsorption can reduce reproducibility.

The challenge is therefore to integrate several functions within the same platform:

surface engineering · molecular recognition · signal transduction · analytical validation

A modular platform strategy
Nanostructured transducers

The studies used different 2D materials to modify screen-printed electrodes or construct nanobioconjugates.

Molybdenum disulphide provided a large surface area and sulphur-related binding sites for thiolated DNA structures. Graphene supplied a conductive electrode platform and was combined with functionalised MoS₂ to create a covalently connected heterostructure. Few-layer bismuthene offered high conductivity, surface area and affinity for thiolated biomolecules.

The material was not selected only because it was nanoscale. Its role had to be compatible with the complete platform:

support the recognition layer;
preserve accessible surface sites;
contribute to electron transfer or signal generation;
remain sufficiently stable during incubation and washing;
produce a measurable and reproducible interface.
Programmable biorecognition

The platforms used several types of recognition elements.

Conventional DNA probes enabled the selective capture of complementary bacterial or viral sequences. Aptamers were used to recognise viral proteins. Tetrahedral DNA nanostructures provided controlled probe orientation and spacing, while DNA dendrimers offered a branched architecture capable of presenting multiple recognition sequences.

These DNA structures were not treated only as genetic information.

They acted as nanoscale construction elements that could position probes, anchoring groups, fluorophores or redox indicators at defined locations within the sensing interface.

Complementary signal transduction

No single readout mechanism was used across the portfolio.

Electrochemical platforms measured changes produced by redox indicators before and after molecular recognition. Electrochemiluminescent systems combined electrode control with light emission and low background signals. A fluorescence bioassay used the interaction between fluorophore-labelled tetrahedral DNA structures and MoS₂ to generate an off–on response after hybridisation.

This diversity demonstrates that the platform concept could be adapted to the target, material combination and intended application.

Portfolio development
Portable multiplex bacterial detection

One platform combined MoS₂-modified screen-printed electrodes, specific DNA probes and thionine-functionalised carbon nanodots to detect sequences associated with Listeria monocytogenes and Salmonella enterica.

The sensing array was connected to a compact potentiostat designed to process up to eight electrochemical channels through time-division multiplexing.

The device included a web-based interface that could be accessed from a computer, tablet or mobile phone. Its detection response was comparable to that obtained with a commercial laboratory potentiostat.

This study represented a progression from an individual sensing electrode towards a portable and multiplex detection concept.

Direct viral-sequence detection

A fluorescence platform combined MoS₂ nanosheets with fluorophore-labelled tetrahedral DNA nanostructures.

The interaction between the two components initially reduced the fluorescence signal. Hybridisation with the target SARS-CoV-2 ORF1ab sequence changed the interaction and restored the signal, producing an off–on detection mechanism.

The bioassay reached a detection limit of 19.7 fM and was applied directly to nasopharyngeal samples from infected patients without a previous amplification step.

This study demonstrated how a nanomaterial–DNA interaction could be engineered to perform both molecular recognition and signal modulation within a simple optical assay.

A later electrochemical platform combined few-layer bismuthene with a water-soluble BODIPY derivative and a thiolated DNA probe. It detected a SARS-CoV-2 RdRp sequence at femtomolar concentrations and distinguished infected and control nasopharyngeal samples without amplification. Its response remained stable for more than one month under ambient conditions.

Viral-protein recognition

Two platforms were developed for SARS-CoV-2 spike-protein detection using different material architectures.

The first used an electrochemiluminescent aptasensor constructed from a covalent MoS₂–graphene heterostructure. The platform reached a detection limit of 9.74 fg/mL, maintained reproducible responses across independently prepared devices and detected the protein in untreated human saliva samples.

The second combined few-layer bismuthene, tetrahedral DNA structures carrying a spike-protein aptamer and Azure A as a redox indicator. It reached a detection limit of 1.74 fg/mL, remained stable for 50 days and was evaluated in nasopharyngeal samples spiked with the target protein.

Together, these studies showed how the same biological target could be addressed using different transducer materials, recognition-layer architectures and signal mechanisms.

Single-base mutation detection

A biosensor for BRCA1 gene analysis combined graphene nanosheets, tetrahedral DNA nanostructures and carbon nanodots with electrochemiluminescent detection.

The platform was designed to distinguish a target BRCA1 sequence from a sequence containing a single-base mutation.

It reached a detection limit of 1.41 aM and differentiated mutated and control samples obtained from patients.

The significance of this result is not only the low concentration detected. It demonstrates molecular discrimination between sequences differing by one nucleotide in a clinically relevant application.

HIV detection in patient plasma

A later platform replaced tetrahedral DNA structures with a DNA dendrimer containing multiple HIV-specific probe sequences.

The dendrimer was immobilised on few-layer bismuthene, while Azure A provided the electrochemical signal associated with hybridisation.

The biosensor reached a detection limit of 3.03 fM, retained stable performance over 60 days and produced a recovery close to 100% in spiked human serum.

It was subsequently tested with plasma from HIV-positive patients representing different viral-load groups, without prior PCR amplification. The platform detected differences between negative and infected samples and showed a signal trend associated with viral load, although it was not designed to resolve every sample within the same clinical group.

This progression from synthetic targets to patient plasma provided a stronger test of the platform under complex biological conditions.

Emerging biomarker detection

The portfolio expanded beyond pathogens to miRNA-27a, a biomarker associated with autism spectrum disorder.

This platform integrated:

few-layer bismuthene as a conductive and DNA-compatible interface;
tetrahedral DNA nanostructures carrying the capture probe;
a proflavine-based covalent organic polymer as an intrinsic redox indicator.

The sensor reached a detection limit of 10.3 aM, maintained selectivity in the presence of other miRNA sequences and produced recoveries close to 100% in spiked human serum.

The study demonstrated how the modular platform strategy could be extended to a different class of analyte and incorporate a newly designed functional polymer into the signal-transduction mechanism.

Representative outcomes
Eight peer-reviewed platforms

Published between 2023 and 2026 across biosensing, analytical chemistry and nanoscience journals.

Up to eight simultaneous channels

Implemented in the portable multiplex bacterial-detection system.

Femtomolar to attomolar detection

Achieved across platforms targeting viral sequences, HIV, BRCA1 mutations and miRNA biomarkers.

Single-base molecular discrimination

Demonstrated through the BRCA1 mutation-detection platform.

Real and clinical samples

Including saliva, serum, nasopharyngeal samples and plasma from infected patients.

Up to 60 days of stability

Demonstrated in selected DNA-biosensor platforms.

These figures represent the performance of the complete biosensing systems and the combined work behind their design, construction, characterisation and analytical validation.

My contribution to platform development

My contribution focused on the physical development, characterisation and validation of the sensing interfaces.

I carried out SEM, EDX and AFM measurements across the different stages of platform construction and performed fluorescence characterisation where it formed part of the study.

My work included:

planning the characterisation strategy;
preparing samples for microscopy;
selecting suitable AFM acquisition conditions;
acquiring images and elemental data;
measuring multiple regions of each sample;
processing and analysing images;
extracting morphological and dimensional information;
comparing successive fabrication stages;
evaluating representativeness and heterogeneity;
preparing figures and quantitative results;
interpreting the physical meaning of the observations;
contributing to the results, discussion and conclusions;
writing or reviewing the resulting publications.

I also contributed to decisions concerning how 2D materials were selected, dispersed, deposited and integrated into the sensing platforms.

My role connected the physical construction of each sensing interface with its analytical development and scientific interpretation.

Characterisation as part of development

Microscopy was not used only to produce final images after a biosensor had already been completed.

It was integrated throughout an iterative development process:

material preparation
→ deposition
→ surface characterisation
→ problem identification
→ protocol adjustment
→ biorecognition-layer integration
→ further characterisation
→ analytical validation

The measurements frequently revealed issues such as:

material aggregation;
heterogeneous deposition;
incomplete surface coverage;
weak material retention;
contamination;
excessive roughness;
changes produced during washing;
difficulty distinguishing successive functional layers;
imaging artefacts caused by the interaction between the probe and sample.

These observations supported the refinement of:

suspension concentration;
deposited volume;
dispersion and sonication;
deposition method;
incubation time;
drying conditions;
washing intensity;
measurement mode;
data-processing criteria.

The objective was not to force every sample into an ideal and uniform morphology. It was to understand whether the observed surface was representative, whether the proposed architecture had been constructed and whether preparation artefacts could affect the analytical response.

Building an evidence chain

No single technique was expected to demonstrate the complete biosensor architecture.

AFM provided nanoscale topography, flake-height information, roughness and local surface evolution.

SEM provided larger-area morphological context and helped evaluate electrode coverage and material distribution.

EDX identified elemental signatures associated with the electrode, 2D material or biomolecular layer.

Fluorescence measurements provided complementary evidence when optical labels or fluorescence-based recognition mechanisms were present.

Electrochemical or electrochemiluminescent measurements then evaluated whether the constructed interface generated a selective analytical response.

The most reliable interpretation therefore came from combining evidence:

morphological contrast + elemental composition + signal response

For example, the miRNA-27a platform was examined at three successive stages: the bare gold electrode, the bismuthene-modified electrode and the final tetrahedral-DNA interface. SEM and EDX detected the change in morphology and the appearance of bismuth- and DNA-related elemental signals, while AFM showed the evolution towards a higher and rougher surface.

Similarly, the MoS₂–graphene aptasensor was characterised through the bare electrode, the electrografted heterostructure and the aptamer-functionalised surface, supporting control of the successive construction stages before analytical testing.

Sampling heterogeneous interfaces

Screen-printed electrodes and deposited 2D materials are intrinsically heterogeneous.

For that reason, measurements were collected across several areas rather than selecting a single visually attractive region.

The multi-area strategy was used to:

distinguish representative behaviour from isolated aggregates;
compare local and larger-scale coverage;
identify preparation defects;
assess whether changes appeared consistently across the sample;
avoid drawing conclusions from a single field of view.

Images and quantitative values used in the publications were selected only after comparing different regions and evaluating their representativeness.

The objective was not to find the most visually ordered area, but to determine what the complete sensing surface actually looked like.

Technical decisions and problem solving
Selecting the appropriate scale

AFM was used when nanoscale height, local roughness or successive surface modifications were important. SEM was used to evaluate morphology and distribution over larger electrode areas.

Combining scales prevented a highly local measurement from being interpreted as representative of the complete electrode.

Adapting AFM to rough electrodes

Screen-printed surfaces can contain grains, pores, binders and large height variations.

Imaging parameters, scan sizes and probe conditions therefore had to be adapted to each platform rather than applying a single standard AFM protocol.

Separating material contrast from artefacts

Apparent particles or layers could originate from the target nanomaterial, residual solvent, salt, contamination or material displaced during preparation.

AFM morphology was therefore compared with SEM, EDX, fluorescence or analytical signals before assigning a specific composition.

Optimising deposition and washing

Excessive deposition could produce aggregation and poorly accessible recognition sites. Insufficient deposition could leave incomplete coverage. Aggressive washing could remove weakly retained material, while insufficient washing could leave unbound components.

Characterisation supported the adjustment of these preparation steps before final analytical evaluation.

Preserving scientific caution

Changes in height or roughness were described as evidence consistent with successive functionalisation, rather than as definitive chemical identification from topography alone.

This distinction increased the credibility of the final interpretation.

What the research demonstrates

The portfolio demonstrates the ability to develop sensing platforms across several levels of complexity.

Materials integration

Selection and incorporation of emerging 2D materials, carbon nanostructures and functional organic materials.

Interface engineering

Construction of screen-printed electrode platforms containing several successive functional layers.

Molecular recognition

Use of DNA hybridisation, aptamer–protein binding and programmable DNA nanostructures.

Multimodal validation

Integration of AFM, SEM, EDX, fluorescence and analytical detection to examine the complete platform.

Iterative development

Use of characterisation results to adjust deposition, washing, incubation and measurement protocols.

Analytical progression

Movement from synthetic target sequences towards complex matrices, portable devices and selected clinical samples.

Scientific communication

Transformation of heterogeneous experimental evidence into figures, discussions, conclusions and peer-reviewed publications.

Broader relevance

The capabilities demonstrated in this portfolio are transferable beyond biosensors.

Medical and diagnostic devices

Development and validation of functional interfaces for molecular recognition and signal transduction.

Electrochemical devices

Characterisation of electrodes, coatings, catalyst layers and surface modifications.

Functional surfaces

Evaluation of coverage, roughness, morphology, defects and successive processing stages.

Two-dimensional materials

Selection, deposition and validation of MoS₂, graphene, bismuthene and related nanomaterials.

Lab-on-chip and point-of-care systems

Integration of disposable sensors with portable electronics and user-facing interfaces.

Semiconductor and device interfaces

Analysis of thin layers, heterogeneous surfaces and material–substrate interactions.

Quality control and process development

Use of multi-area characterisation to identify defects, establish preparation protocols and evaluate reproducibility.

Scientific instrumentation

Adaptation of microscopy and analytical workflows to non-ideal, application-oriented samples.

Skills demonstrated
Biosensors and nanomaterials
Biosensor platform development
Two-dimensional materials
Screen-printed electrodes
DNA biosensors
Aptasensors
Tetrahedral DNA nanostructures
DNA dendrimers
Molecular recognition
Functional-surface engineering
Characterisation and metrology
Atomic Force Microscopy
Scanning Electron Microscopy
Energy-Dispersive X-ray Spectroscopy
Fluorescence characterisation
Surface morphology analysis
Flake-height measurement
Roughness analysis
Multi-area sampling
Measurement validation
Artefact identification
Data and interpretation
Image processing
Quantitative microscopy
Experimental data analysis
Cross-technique comparison
Scientific figure preparation
Data visualisation
Results interpretation
Technical discussion
Scientific writing
Transferable capabilities
Experimental problem solving
Method development
Protocol optimisation
Evidence-based decision-making
Cross-disciplinary communication
Research collaboration
Quality control
Peer-reviewed publication
Tools and technologies

Nanomaterials
MoS₂ · Graphene nanosheets · Few-layer bismuthene · Carbon nanodots · Covalent organic polymers

Biorecognition
DNA probes · Aptamers · Tetrahedral DNA nanostructures · DNA dendrimers

Transduction
Differential Pulse Voltammetry · Electrochemiluminescence · Fluorescence

Characterisation
AFM · SEM · EDX · Fluorescence microscopy and spectroscopy · Image analysis

Platforms
Carbon screen-printed electrodes · Gold screen-printed electrodes · Graphene screen-printed electrodes · Portable multiplex potentiostat

Selected publications
Multiplex Portable Biosensor for Bacteria Detection

Biosensors, 2023

MoS₂-based DNA sensing array and portable multiplex potentiostat for Listeria and Salmonella detection.

View publication

A “Signal Off–On” Fluorescence Bioassay Based on a 2D-MoS₂–Tetrahedral DNA Bioconjugate

Talanta, 2024

Fluorescence detection of a SARS-CoV-2 genetic sequence using MoS₂ and tetrahedral DNA structures.

View publication

Rapid Viral-Protein Detection by a Functionalised MoS₂/Graphene Electrochemiluminescence Aptasensor

Talanta, 2024

Covalent 2D heterostructure for spike-protein detection in human saliva.

View publication

Bismuthene–Tetrahedral DNA Nanobioconjugate for Virus Detection

Biosensors and Bioelectronics, 2024

Bismuthene and aptamer-functionalised DNA tetrahedra for SARS-CoV-2 protein detection.

View publication

Tetrahedral DNA Nanostructures, Graphene and Carbon Nanodots for BRCA1 Mutation Detection

Talanta, 2025

Electrochemiluminescent detection and discrimination of a single-base BRCA1 mutation.

View publication

Advancing Diagnostics with BODIPY–Bismuthene DNA Biosensors

Nanoscale, 2025

Amplification-free SARS-CoV-2 sequence detection using bismuthene and a water-soluble BODIPY indicator.

View publication

Dendrimer-Based DNA Biosensor for HIV Detection

Biosensors and Bioelectronics, 2025

Bismuthene and DNA-dendrimer platform tested in patient plasma across different viral loads.

View publication

Covalent Organic Polymer-Based Biosensor for Autism Biomarker Detection

Microchimica Acta, 2026

Bismuthene, tetrahedral DNA and an electroactive organic polymer for miRNA-27a detection.

View publication

Final perspective

A high-performance biosensor is not created by selecting the material with the largest surface area or the lowest reported detection limit.

Its performance depends on how the material is processed, how the recognition element is presented, how the layers interact and whether the complete interface remains stable and measurable under realistic experimental conditions.

This portfolio demonstrates a complete development logic:

design the interface, build it, examine it, improve it and connect its physical structure with its analytical response.

Through this work, I developed experience in translating complex nanoscale architectures into experimentally validated sensing platforms and peer-reviewed scientific results.

4. Estructura visual recomendada
1. Hero visual
Contenido

Una composición limpia formada por:

Un electrodo screen-printed.
Una imagen AFM o SEM de un material 2D.
Una representación simplificada de DNA sobre la interfaz.
Una señal electroquímica, ECL o fluorescente muy discreta.
Objetivo

Mostrar inmediatamente:

nanomaterial + biological recognition + measurable device

Caption

Nanomaterial-enabled sensing interfaces combining surface engineering, programmable DNA structures and molecular detection.

No usaría como hero una figura científica completa con múltiples gráficos.

2. Diagrama de arquitectura modular

Debe aparecer tras Overview.

Estructura

Target molecule
→ DNA probe or aptamer
→ DNA nanostructure
→ 2D-material interface
→ Screen-printed transducer
→ Electrochemical, ECL or fluorescence signal

Mensaje

A modular architecture allowed the recognition, material and signal components to be adapted to each target.

3. Mapa de la cartera

Una matriz visual sencilla:

Target	Material	Recognition	Readout
Bacteria	MoS₂	DNA probes	Electrochemistry
Viral sequence	MoS₂	TDN-DNA	Fluorescence
Viral protein	MoS₂/graphene	Aptamer	ECL
Viral protein	Bismuthene	TDN-aptamer	Electrochemistry
BRCA1 mutation	Graphene	TDN-DNA	ECL
HIV	Bismuthene	DNA dendrimer	Electrochemistry
miRNA-27a	Bismuthene/COP	TDN-DNA	Electrochemistry

Debe permitir comprender la diversidad sin leer las ocho publicaciones.

4. Flujo de desarrollo completo

Situarlo antes de My contribution.

Biosensor concept
→ Material selection
→ Dispersion and deposition
→ Surface characterisation
→ Protocol optimisation
→ Biorecognition-layer integration
→ Analytical testing
→ Real-sample evaluation
→ Publication

Caption

Characterisation and analytical testing were integrated into an iterative platform-development cycle.

5. Caracterización de etapas sucesivas

La mejor opción es mostrar tres estados de una plataforma:

Bare electrode.
2D-material-modified electrode.
DNA-functionalised electrode.

Y, para cada estado:

SEM.
EDX.
AFM.

La Figura 5 del artículo sobre miRNA-27a, situada en la página 8, ofrece precisamente esta comparación entre AuSPE, AuSPE/FLB y AuSPE/FLB/TDN-miRNA-27a. Es probablemente el ejemplo visual más completo para demostrar construcción progresiva de la plataforma.

Caption

Complementary microscopy and elemental analysis tracked the interface from the bare electrode to the final DNA-functionalised platform.

Como alternativa, la Figura 2 del artículo de electroquimioluminiscencia compara mediante AFM el electrodo de graphene, la heteroestructura MoS₂/graphene y la superficie funcionalizada con aptámero.

6. Cuatro resultados representativos

Cuatro tarjetas visuales:

Portable multiplex detection

Up to 8 channels

Molecular discrimination

Single-base BRCA1 mutation

Complex biological samples

Saliva, serum, plasma and nasopharyngeal samples

Platform stability

Up to 60 days

No incluiría más de una cifra por tarjeta.

7. Timeline de publicaciones

Una línea temporal 2023–2026 con los ocho artículos.

Cada elemento debe mostrar solamente:

Año.
Target.
Material principal.
Revista.

Los detalles completos permanecerán en la sección de publicaciones.

5. SEO editorial
Recommended slug

/work/nanomaterial-biosensors-molecular-detection

SEO title

Nanomaterial Biosensors for Molecular Detection | David López Diego

Meta description

Eight published biosensor studies integrating 2D materials, DNA nanostructures and multimodal characterisation for pathogen and biomarker detection.

Open Graph title

Nanomaterial-Enabled Biosensors for Molecular Detection

Open Graph description

A research portfolio spanning portable bacterial detection, viral diagnostics, genetic mutations and emerging biomarkers.

Main keyword

nanomaterial biosensors

Secondary keywords
2D-material biosensors
DNA biosensors
biosensor development
molecular detection
electrochemical biosensors
electrochemiluminescence
tetrahedral DNA nanostructures
bismuthene biosensors
MoS₂ biosensors
AFM surface characterisation
pathogen detection
biomarker detection
Structured data

Usaría CreativeWork o CollectionPage para el caso principal.

Campos recomendados:

name
description
author
about
keywords
dateCreated
dateModified
hasPart
citation
contributor
associatedMedia

Cada artículo puede incluirse dentro de hasPart como ScholarlyArticle, con:

headline
datePublished
author
publisher
isPartOf
sameAs
identifier
url
Open Graph image

Una composición horizontal de:

electrodo;
nanosheet;
DNA nanostructure;
señal analítica.

Evitar texto pequeño tomado directamente de figuras académicas.

# SW-03 — From Material Structure to Thermoelectric Performance

| Field | Approved value |
| --- | --- |
| Order | 3 |
| Tier | Primary |
| Page type | Functional-materials and transport-metrology case study |
| Canonical slug | /work/thermoelectric-materials-metrology |
| Internal page title | From Material Structure to Thermoelectric Performance |

## Objective within the portfolio

Show transport-metrology capability, flexible-material reliability testing, experimental automation and progression from instrument operation to custom measurement development.

## Main message

David links nanostructure, charge transport, heat transport, mechanical reliability and custom metrology to determine whether thermoelectric materials remain measurable and functional after processing and integration.

## Priority audiences

- Thermoelectric and energy-harvesting R&D
- Semiconductor and functional-materials companies
- Flexible-electronics teams
- Thermal-management groups
- Scientific-instrumentation and metrology organisations

## In-page navigation groups

Overview → Characterisation workflow → Flexible films → Out-of-plane Seebeck → Automation → Broader relevance

## Unique components

- Transport-characterisation map
- Flexible-film subcase
- Qualitative recovery diagram
- Out-of-plane Seebeck diagram
- Related-instrumentation block

## Approved assets and placement

| Asset | Type | Placement | Caption |
| --- | --- | --- | --- |
| assets/sw-03/hero-thermoelectric-materials.png | Conceptual project overview | Hero-support visual near the top of the page. | Connecting nanostructure, charge transport, heat transport and device integration in Bi2Te3-based thermoelectric materials. |
| assets/sw-03/flexible-bite3-pla-laminate.jpg | Real experimental sample photograph | Inside Case Study 01, after Context and before Making Bending Measurable. | Electrodeposited Bi2Te3 film transferred to a PLA laminate for controlled bending and transport characterisation. |

## Implementation observations

- Keep quantitative bending radii, cycle counts, time constants and exact transport changes reserved.
- Use a clearly labelled qualitative conductivity-recovery diagram rather than a numerical graph.
- Do not use self-healing, fully reversible or no-damage language.
- The triboelectric setup is related instrumentation and must remain visually secondary.

## Project acceptance criteria

- The distinction between electrical, thermoelectric and thermal measurements is understandable to non-specialists.
- The flexible-film and out-of-plane Seebeck subcases are clearly separated.
- The qualitative recovery figure is labelled as non-quantitative ongoing-research communication.
- Python-assisted analysis remains prominent rather than buried near the end.
- The real flexible-laminate photograph is not cropped and includes a precise, cautious caption.

## Definitive approved content

2. Tarjeta para Selected Work
Category

Thermoelectrics · Transport Metrology · Functional Materials

Title

From Material Structure to Thermoelectric Performance

Card description

Characterisation of nanostructured thermoelectric materials through electrical, thermal and morphological measurements, connecting fabrication, transport behaviour and device-oriented performance across rigid, layered and flexible systems.

Proof points

Hall and Seebeck transport
NanoTR and PicoTR
Flexible-material reliability
Custom measurement development

Technologies

Bi₂Te₃ · Hall Effect · Seebeck · NanoTR · PicoTR · SEM · Python

Status

Ongoing research and instrumentation development

CTA

Explore the research work

3. Página interna en inglés lista para copiar
From Material Structure to Thermoelectric Performance
Electrical, thermal and morphological characterisation of nanostructured materials for energy harvesting and functional-device development

Thermoelectric materials convert temperature differences into electrical voltage.

Their practical performance, however, cannot be determined from composition alone. It depends on how the material is structured, how efficiently charge carriers move, how heat propagates through the system and how the material behaves after integration into a real device.

Within the FINDER research group at IMN-CNM, CSIC, I work on the characterisation and experimental validation of thermoelectric materials ranging from electrodeposited films and nanostructures to flexible and device-oriented systems.

My work combines electrical and thermal transport measurements, morphological analysis, sample and contact adaptation, automated data processing and the development of new experimental methods.

The central objective is to connect material fabrication and nanostructure with measurable thermoelectric behaviour under realistic experimental conditions.

Project snapshot

Research area
Thermoelectric materials, transport metrology and energy harvesting

Research group
FINDER · Instituto de Micro y Nanotecnología, IMN-CNM, CSIC

Material systems
Bi₂Te₃-based films · Nanowalls · Nanowires · Interconnected nanostructures · Flexible laminates

Electrical characterisation
Hall effect · Electrical conductivity · Resistivity · Carrier concentration · Carrier mobility

Thermoelectric characterisation
Seebeck coefficient · Power-factor analysis · In-plane and out-of-plane transport

Thermal characterisation
NanoTR · PicoTR · Thermal diffusivity and conductivity-related measurements

Structural characterisation
SEM · EDX · Surface and cross-sectional analysis

Experimental development
Flexible-material testing · Custom fixtures · Robotic actuation · Instrument construction

Data processing
Python-assisted analysis · Automated fitting · Comparison and reporting

Overview

The FINDER group develops electrodeposited and nanostructured thermoelectric materials for energy harvesting, thermal management and device integration.

Its research includes thin films, one-dimensional nanowire arrays, interconnected three-dimensional structures and flexible thermoelectric generators. Previous work from the group has shown that nanoscale geometry can influence optical heating and thermoelectric voltage, and that Bi₂Te₃-based materials can be integrated into flexible polymer structures for wearable energy-harvesting concepts.

Within this research environment, my contribution focuses on determining how these materials actually behave after fabrication.

This requires more than acquiring a single electrical or thermal value. Samples must be inspected, contacted, positioned and measured using configurations adapted to their geometry. Results must then be checked for consistency, compared across fabrication conditions and interpreted alongside morphological evidence.

The recurring development workflow is:

material fabrication
→ structure and composition
→ sample and contact preparation
→ electrical transport
→ thermoelectric response
→ thermal transport
→ mechanical or device integration
→ data validation
→ feedback to material development

The thermoelectric challenge

A useful thermoelectric material must balance several interconnected properties.

The Seebeck coefficient describes the voltage generated by a temperature difference. Electrical conductivity determines how efficiently charge can move through the material. Thermal transport determines how easily the temperature gradient is preserved or dissipated.

Optimising one property can affect the others.

Nanostructuring offers routes to modify these relationships, but it also introduces practical complications:

irregular thickness;
heterogeneous morphology;
anisotropic transport;
fragile structures;
difficult electrical contacts;
substrate contributions;
non-standard sample geometries;
differences between in-plane and through-thickness transport;
sensitivity to transfer, bending and handling.

For that reason, thermoelectric development requires a coordinated characterisation strategy rather than isolated measurements.

FINDER research context

The materials studied by FINDER are commonly produced through electrochemical deposition.

This fabrication route can provide control over:

composition;
growth conditions;
morphology;
orientation;
thickness;
nanostructure geometry;
integration with templates and polymer substrates.

The research includes Bi₂Te₃ films, nanowire arrays, interconnected networks and flexible device architectures.

A study from the group compared Bi₂Te₃ films, one-dimensional nanowire arrays and interconnected three-dimensional nanowire networks. It showed that geometrical configuration strongly affected plasmonic heating and the resulting thermoelectric voltage.

Another study integrated Bi₂Te₃ and Te structures into commercially available polyester, demonstrating the feasibility of flexible thermoelectric generators designed to harvest small temperature differences from wearable environments.

These projects provide the broader scientific context for my work, although I did not participate directly in those publications.

My contribution

My work focuses on the experimental characterisation, validation and analysis of thermoelectric materials developed within the group.

I carry out or contribute to:

morphological and compositional characterisation;
SEM and EDX analysis;
Hall-effect measurements;
electrical conductivity and resistivity analysis;
carrier-concentration and mobility determination;
Seebeck measurements;
NanoTR and PicoTR thermal measurements;
sample inspection and dimensional assessment;
electrical-contact preparation;
adaptation of samples to measurement equipment;
comparison between fabrication conditions;
identification of measurement artefacts;
repetition and consistency checks;
Python-assisted data processing;
preparation of figures and technical results;
interpretation and presentation of experimental findings.

A significant part of this work involves adapting standard measurement principles to samples that are thin, fragile, porous, flexible, anisotropic or geometrically incompatible with conventional holders.

My role is to determine whether a newly fabricated material remains measurable, comparable and functionally relevant after processing and integration.

Characterisation workflow
1. Initial sample assessment

Each sample is inspected before transport measurements begin.

The assessment includes:

visible integrity;
surface morphology;
dimensions and thickness;
substrate characteristics;
contact accessibility;
probable transport direction;
compatibility with the measurement holder.

This stage determines whether the standard configuration can be used or whether a custom adaptation is required.

2. Morphology and composition

SEM provides information about surface structure, film continuity, nanowall or nanowire morphology, defects and changes produced during processing.

EDX provides complementary elemental information and helps assess whether the deposited material is compositionally consistent with the intended system.

Morphological evidence is interpreted together with electrical and thermal results. A structurally intact surface does not necessarily guarantee stable transport, while a heterogeneous morphology does not automatically imply poor functional performance.

3. Electrical transport

Hall and conductivity measurements are used to evaluate:

electrical conductivity;
resistivity;
carrier concentration;
carrier type;
carrier mobility;
consistency between repeated measurements.

The measurement geometry and electrical contacts are especially important.

Contact resistance, non-uniform current paths, small sample dimensions and substrate effects can all alter the apparent result. Measurements are therefore evaluated through repeated acquisitions, comparison between configurations and consistency with sample geometry.

4. Seebeck response

Seebeck measurements determine the voltage generated when a controlled temperature difference is applied to the sample.

The analysis requires:

stable temperature sensing;
controlled thermal gradients;
reliable voltage acquisition;
appropriate electrical contacts;
identification of stable measurement intervals;
regression and consistency checks;
separation of sample behaviour from instrumental drift.

The resulting data are processed using Python routines that standardise fitting, parameter extraction, plotting and comparison between samples.

5. Thermal transport

NanoTR and PicoTR measurements provide information related to heat propagation at small length scales.

These techniques are particularly relevant for thin films and nanostructured materials, where bulk measurement assumptions may not be appropriate.

Their interpretation requires careful consideration of:

layer thickness;
substrate properties;
interface effects;
surface condition;
multilayer geometry;
model assumptions.
6. Data validation and feedback

The individual results are combined to evaluate the material as a functional system.

The questions are not limited to whether a measurement produced a numerical value.

The workflow asks:

Is the value physically consistent?
Is it reproducible?
Does it change between regions or samples?
Can the change be linked to fabrication or geometry?
Is the sample suitable for further processing?
Has integration damaged the material?
Does the measurement direction represent the intended device?

The resulting evidence is communicated to the researchers responsible for fabrication so that processing conditions, material selection or device design can be adjusted.

Case Study 01
Controlled Bending and Electrical Recovery in Flexible Bi₂Te₃ Films
Context

Many thermoelectric materials are initially fabricated on rigid substrates, while future energy-harvesting applications may require them to conform to curved, moving or wearable surfaces.

The current project investigates Bi₂Te₃ films electrodeposited with sodium lignosulfonate as an additive.

The material develops an intercrossed nanowall morphology and is initially grown on an Au/Cr-coated silicon substrate. A PLA sheet is subsequently melted onto the film and used to detach it from the rigid support, producing a flexible thermoelectric laminate.

The central experimental question is:

How does repeated and controlled mechanical deformation affect the morphology and transport properties of the thermoelectric film, and how does the material evolve after the load is removed?

My responsibility

I carried out the experimental work associated with bending and post-bending validation.

This included:

planning the characterisation programme;
preparing and adapting the flexible samples;
solving geometry and contact limitations;
establishing baseline measurements;
designing controlled bending procedures;
performing repeated bending cycles;
applying different curvatures;
measuring the electrical response before, during and after bending;
performing periodic measurements after unloading;
conducting morphological, Hall, Seebeck, NanoTR and PicoTR characterisation across the study;
analysing and comparing the results;
developing automated processing routines;
preparing and presenting the experimental findings.

This work covered the complete process from experimental design to final interpretation.

Making bending measurable

Manually bending a film does not provide a sufficiently controlled experimental condition.

Small differences in curvature, position, pressure, movement and holding time can produce results that cannot be compared reliably.

To make deformation more quantitative and reproducible, the workflow incorporated two complementary strategies.

3D-printed fixtures

Custom fixtures were used to impose defined bending geometries.

They provided a repeatable physical reference and reduced operator-dependent variation between tests.

Different fixture geometries allowed the response of the films to be studied under different curvatures.

Robotic actuation

Robotic arms were used to apply controlled and repeatable movement.

This approach allowed variables such as displacement, trajectory, cycle number and actuation sequence to be standardised more effectively than with manual handling.

The combination of fixtures and robotic actuation transformed bending from a qualitative demonstration into a controlled reliability experiment.

Measurement adaptation

The flexible laminate presented practical challenges that were not addressed by standard rigid-sample holders.

The geometry and electrical contacts had to be adapted so that:

the active film could be positioned consistently;
the contacts remained stable during deformation;
bending occurred in a defined region;
the measuring system did not mechanically constrain the sample incorrectly;
the observed changes could be separated from contact failure;
the same sample could be monitored over time.

Solving these problems was essential before interpreting any transport change as material behaviour.

Electrical response during bending

Electrical conductivity was measured:

before deformation;
while the sample remained bent;
immediately after unloading;
at several subsequent time intervals.

Repeated bending cycles and different curvatures were evaluated.

Across multiple samples, conductivity decreased while the material was under deformation.

After the mechanical load was removed, periodic measurements showed a progressive recovery. The conductivity approached values close to the initial state over time under the conditions studied.

The response was therefore not limited to an instantaneous loss under bending; it included a time-dependent recovery after unloading.

The current public description is deliberately qualitative. Exact conductivity changes, recovery times, curvature values and cycle-dependent results remain reserved while the research is being completed.

Scientific interpretation

The observation demonstrates a largely recoverable electrical response under the tested conditions, but it does not by itself identify the mechanism responsible for recovery.

Possible contributions may include changes in:

contact between nanostructured regions;
microcrack opening and closure;
internal mechanical stress;
film–polymer interaction;
electrical-contact geometry;
time-dependent structural relaxation.

These mechanisms remain hypotheses until supported by the complete morphological, electrical and thermal dataset.

For this reason, the current interpretation is limited to the experimentally demonstrated behaviour:

Conductivity decreased during controlled bending and progressively returned towards the initial value after unloading across multiple samples.

Terms such as self-healing, complete reversibility or absence of permanent damage are not used without further evidence.

Multimodal validation

The study combined complementary techniques across the pre-bending, bending and post-bending workflow.

SEM and EDX

Used to examine morphology, structural integrity and compositional features.

Hall measurements

Used to evaluate changes in electrical transport, carrier concentration and mobility.

Seebeck measurements

Used to study whether thermoelectric voltage generation was preserved after mechanical deformation.

NanoTR and PicoTR

Used to evaluate thermal-transport-related behaviour before and after processing or deformation.

Time-dependent conductivity

Used to monitor both the immediate effect of bending and the subsequent recovery.

The objective was to avoid interpreting electrical changes without considering possible morphological, contact or thermal contributions.

What this case demonstrates
Reliability testing

Functional properties were monitored under mechanical load and after unloading.

Experimental reproducibility

Curvature and movement were controlled using custom fixtures and robotic actuation.

Time-dependent analysis

Measurements were extended beyond the end of the mechanical test to capture recovery.

Instrument adaptation

Flexible samples and contacts were made compatible with systems designed primarily for rigid geometries.

Multimodal interpretation

Morphological, electrical, thermoelectric and thermal evidence were combined.

Scientific caution

The observable response is reported without assigning a mechanism that has not yet been conclusively demonstrated.

Case Study 02
Developing an Out-of-Plane Seebeck Measurement System
Why out-of-plane measurements matter

Conventional Seebeck systems often impose a temperature gradient along the plane of a film.

However, many real devices operate with heat flowing through the thickness of the material.

Examples include:

layered thermoelectric stacks;
top-and-bottom contacted films;
flexible laminates;
wearable generators placed between the body and the environment;
materials with anisotropic transport.

In those systems, an in-plane measurement may not represent the direction used by the final device.

The group’s polyester-embedded thermoelectric architecture is an example of a system intended to operate with a temperature difference applied through its thickness.

Project objective

The objective is to build a measurement system capable of:

generating a controlled through-thickness temperature gradient;
measuring temperatures close to both sides of the sample;
acquiring the resulting thermoelectric voltage;
accommodating thin and layered materials;
reducing parasitic heat losses;
providing reproducible measurements on real samples.

The system is being developed from the ground up rather than by adapting a commercial Seebeck instrument.

My contribution

The initial measurement concept was defined by the research team.

Following that conceptual stage, I contributed across the experimental implementation:

mechanical construction;
integration of the measurement geometry;
electronics;
temperature-sensor integration;
electrical contacts;
acquisition workflow;
programming;
calibration;
data processing;
measurement analysis;
validation with samples.

The system has progressed beyond the design stage and is currently producing preliminary reproducible measurements on real samples.

Main metrology challenges
Through-thickness temperature measurement

Temperatures must be measured as close as possible to the material surfaces without significantly altering the heat flow.

Electrical and thermal contacts

The interfaces must provide stable measurement conditions while avoiding excessive thermal short-circuiting or contact-related voltage artefacts.

Small temperature differences

Thermoelectric voltages can be small, making signal stability, shielding and drift control important.

Parasitic heat flow

Heat can escape through sample holders, wires, sensors and surrounding air.

The system must therefore distinguish the intended through-sample gradient from alternative thermal paths.

Thin and layered samples

When the material thickness is small, sensor dimensions and contact placement can become comparable to the sample itself.

Calibration and validation

The final system must be tested using reference samples or independently characterised materials before unknown samples can be interpreted with confidence.

Technical value

The project represents a progression from operating established measurement systems to developing new metrology.

The setup is intended to measure thermoelectric behaviour in the same transport direction used by layered and through-thickness device architectures.

This capability is relevant to:

thin films;
multilayer structures;
flexible thermoelectrics;
vertical devices;
anisotropic materials;
integrated thermoelectric generators.
Related energy-harvesting instrumentation
Triboelectric Measurement System

Thermoelectric and triboelectric systems both address small-scale energy harvesting, but they operate through different physical mechanisms.

Thermoelectric materials convert a temperature difference into electrical voltage.

Triboelectric systems generate electrical charge through controlled contact, separation or friction between materials.

The team is currently refining an experimental system for reproducible triboelectric measurements.

The development is still in the testing stage.

Variables under evaluation

The current work examines the influence of:

contact and separation;
lateral friction;
applied force;
movement frequency;
displacement and travel;
contact geometry;
repeated mechanical cycles.
Electrical outputs

The setup measures:

voltage;
current;
power.

The objective is to understand how the imposed mechanical conditions influence the generated electrical response and to establish a measurement procedure that can be compared between materials.

This development is presented as a related instrumentation activity rather than as a thermoelectric case study, because the physical conversion mechanism is different.

Python-assisted transport analysis

Data processing is an integral part of the experimental workflow.

I develop Python routines to standardise the analysis of measurements such as Hall, Seebeck and electrical transport.

Depending on the experiment, the workflow can include:

file import;
data cleaning;
unit conversion;
stable-region selection;
linear fitting;
parameter extraction;
comparison between repeated measurements;
comparison between pre-bending and post-bending states;
time-dependent recovery analysis;
automated figure generation;
result tables;
consistency checks.

Automation reduces dependence on manual processing and helps apply the same criteria across samples and measurement campaigns.

It also makes it easier to identify:

anomalous measurements;
fitting failures;
inconsistent contacts;
temporal drift;
differences between samples;
behaviour that requires experimental repetition.

The purpose of automation is not only faster analysis, but more consistent and traceable interpretation.

Measurement challenges and problem solving
Non-standard geometries

Flexible, porous and thin-film samples do not always match commercial measurement holders.

Custom adaptations are developed without changing the physical meaning of the measurement.

Contact stability

An apparent change in conductivity may originate from the material, the electrode contact or mechanical movement.

Repeated measurements and configuration checks are used to distinguish these contributions.

In-plane versus out-of-plane transport

The measurement direction must match the scientific question and, where possible, the operating geometry of the final device.

Fragile materials

Thin and nanostructured films can be damaged by clamping, probing or repeated handling.

Sample mounting must therefore balance stability and mechanical preservation.

Thermal drift

Temperature-dependent measurements require sufficient stabilisation before parameters can be extracted.

Mechanical reproducibility

Bending radius, movement and cycle history must be controlled before different samples can be compared meaningfully.

Data volume

Repeated cycles, multiple time points and several characterisation methods produce datasets that are difficult to analyse reliably through manual workflows alone.

Python-based processing provides a consistent analytical structure.

What the work demonstrates
Transport metrology

Experience measuring electrical, thermoelectric and thermal properties.

Functional-material validation

Ability to determine whether processing and integration alter material performance.

Flexible-material reliability

Development of controlled bending and post-deformation monitoring.

Instrument development

Construction and validation of an out-of-plane Seebeck system.

Experimental automation

Use of custom software, fixtures and robotic actuation.

Cross-technique interpretation

Integration of morphology, composition, charge transport and heat transport.

Evidence-based decision-making

Identification of unreliable measurements, unsuitable configurations and material-dependent behaviour.

Broader relevance

The capabilities demonstrated in this work are transferable to several technological sectors.

Semiconductor materials

Carrier transport, resistivity, contacts, anisotropy and thin-film characterisation.

Flexible electronics

Mechanical reliability, repeated deformation and property recovery.

Energy harvesting

Thermoelectric and triboelectric conversion systems.

Thermal management

Thermal transport in films, coatings, interfaces and layered devices.

Functional coatings

Evaluation of morphology, continuity and transport after deposition or transfer.

Batteries and energy materials

Adaptation of electrical and thermal characterisation to heterogeneous samples.

Scientific instrumentation

Construction, calibration and automation of non-standard measurement systems.

Quality and reliability engineering

Development of repeatable test procedures and comparison criteria.

Skills demonstrated
Thermoelectric materials
Bi₂Te₃-based systems
Electrodeposited films
Nanowall morphologies
Nanostructured materials
Flexible thermoelectric laminates
Energy-harvesting materials
Anisotropic transport
Electrical transport
Hall effect
Electrical conductivity
Resistivity
Carrier concentration
Carrier mobility
Contact evaluation
Time-dependent electrical measurements
Thermoelectric and thermal transport
Seebeck coefficient
In-plane Seebeck measurements
Out-of-plane Seebeck development
NanoTR
PicoTR
Thermal transport analysis
Power-factor interpretation
Materials characterisation
SEM
EDX
Morphological analysis
Cross-sectional assessment
Damage and defect inspection
Pre/post-process comparison
Mechanical and reliability testing
Controlled bending
Repeated bending cycles
Multiple curvature conditions
3D-printed fixtures
Robotic actuation
Post-deformation monitoring
Recovery analysis
Instrumentation and software
Measurement-system construction
Sensor integration
Electronics
Calibration
Data acquisition
Python
Automated fitting
Data visualisation
Technical reporting
Tools and technologies

Materials
Bi₂Te₃ · Electrodeposited films · Nanostructured thermoelectrics · PLA laminates

Electrical transport
Hall effect · Conductivity · Resistivity · Carrier concentration · Mobility

Thermoelectric transport
Seebeck · In-plane measurements · Out-of-plane system development

Thermal transport
NanoTR · PicoTR

Characterisation
SEM · EDX · Morphological and dimensional analysis

Mechanical testing
3D-printed fixtures · Robotic arms · Controlled curvature · Repeated cycles

Data and automation
Python · Automated analysis · Regression · Time-series comparison · Figure generation

Research evidence
Flexible Thermoelectric Films Fabricated by Electrochemistry for Conformable Applications

EDNANO17 conference abstract

Bi₂Te₃ films with an intercrossed nanowall morphology were electrodeposited and transferred to PLA to produce a flexible thermoelectric laminate. My contribution covered the bending experiments, multimodal characterisation, analysis and presentation of results.

Related FINDER research

The following publications provide scientific context for the material systems and applications developed by FINDER. They are not presented as my publications.

Geometry-driven plasmonic heating in Bi₂Te₃ nanostructures.
Flexible polyester-embedded thermoelectric devices with Bi₂Te₃ and Te legs.
Research status

The flexible-film study and custom measurement developments are ongoing.

The current portfolio description therefore focuses on:

the experimental methodology;
the measurement challenges;
the instrumentation developed;
the qualitative conductivity response;
the demonstrated recovery trend;
the capabilities acquired.

Exact bending radii, cycle counts, temporal constants, transport-property changes and comparative performance values remain reserved until the research is publicly disseminated.

Final perspective

Thermoelectric materials cannot be evaluated only under ideal and static conditions.

Their usefulness depends on whether they remain measurable and functional after transfer, contact formation, mechanical deformation and integration into realistic geometries.

This work combines established transport characterisation with reliability testing and new instrument development.

Characterise the material, challenge it under realistic conditions, monitor how its properties evolve and develop new metrology when conventional systems are no longer sufficient.

Through this research, I have developed experience connecting nanostructured materials, transport physics, experimental automation and device-oriented validation.

4. Estructura visual recomendada
Hero general

La imagen principal debe representar el conjunto de la línea, no únicamente la película flexible.

Composición
Una nanoestructura de Bi₂Te₃.
Un gradiente térmico.
Movimiento de portadores.
Una señal de tensión.
Una muestra rígida evolucionando hacia un formato flexible.
Un pequeño sistema de medida o contactos.
Mensaje visual

structure → transport → performance → integration

Caption

Connecting nanostructure, charge transport, heat transport and device integration in thermoelectric materials.

Diagrama 1 — Research framework

Fabrication
→ Structure and composition
→ Electrical transport
→ Thermal transport
→ Thermoelectric performance
→ Mechanical and device integration

Este debe ser el principal diagrama conceptual de la página.

Diagrama 2 — Characterisation map
Technique	Information
SEM / EDX	Morphology and composition
Hall	Carrier concentration and mobility
Conductivity	Charge transport
Seebeck	Voltage response to a thermal gradient
NanoTR / PicoTR	Thermal transport
Python	Processing, comparison and reporting
Visual real del caso flexible

Utilizaría la fotografía de la lámina de PLA doblada incluida en el abstract.

Caption

Electrodeposited Bi₂Te₃ film transferred to PLA for controlled deformation and transport characterisation.

No afirmaría en la caption que las propiedades se conservan completamente.

Figura — Flexible-film workflow

Rigid growth substrate
→ Electrodeposited Bi₂Te₃ nanowalls
→ PLA lamination
→ Film delamination
→ Flexible laminate
→ Controlled bending
→ Post-bending monitoring

Figura — Conductivity response

Recomiendo un esquema conceptual sin escala numérica:

Initial conductivity.
Decrease during bending.
Unloading.
Progressive recovery.
Approach to initial conductivity.

Debe marcarse como:

Qualitative trend — quantitative results reserved during ongoing research

Esto comunica el hallazgo sin revelar valores.

Figura — Controlled bending

Mostrar dos métodos complementarios:

3D-printed fixtures

Defined and repeatable curvature.

Robotic actuation

Controlled movement and repeated cycles.

El visual puede incluir una película con contactos durante el movimiento.

Figura — Out-of-plane Seebeck

Un corte transversal sencillo:

heated contact
→ sample thickness
→ cooled contact

Con:

sensores de temperatura;
voltímetro;
flujo térmico;
tensión Seebeck;
contactos superior e inferior.

Debe comparar discretamente:

in-plane frente a out-of-plane

sin convertirlo en una explicación académica extensa.

Visual secundario — Triboelectric setup

Una figura pequeña con:

contacto;
separación;
fricción lateral;
fuerza;
frecuencia;
voltaje, corriente y potencia.

Debe aparecer al final como línea relacionada, no como visual central.

5. SEO editorial
Slug recomendado

/work/thermoelectric-materials-metrology

SEO title

Thermoelectric Materials and Transport Metrology | David López Diego

Meta description

Electrical, thermal and morphological characterisation of nanostructured thermoelectric materials, including flexible-film testing and custom Seebeck metrology.

Open Graph title

From Material Structure to Thermoelectric Performance

Open Graph description

Transport characterisation, flexible-material reliability and custom measurement development for Bi₂Te₃-based thermoelectric systems.

Main keyword

thermoelectric materials characterisation

Secondary keywords
thermoelectric transport measurements
Bi₂Te₃ characterisation
Seebeck measurement
Hall effect measurements
out-of-plane Seebeck
flexible thermoelectric materials
thermoelectric reliability
thermal transport
NanoTR
PicoTR
energy-harvesting materials
scientific instrumentation
Python data analysis
Structured data

Utilizaría CreativeWork o CollectionPage.

Campos recomendados:

name
description
author
about
keywords
contributor
associatedMedia
hasPart
citation
dateCreated
dateModified

Los dos casos pueden incluirse mediante hasPart como elementos CreativeWork.

El abstract puede incorporarse como ScholarlyArticle o CreativeWork, dependiendo de su estado público final.

# SW-04 — Advanced Materials Characterisation & Scientific Instrumentation

| Field | Approved value |
| --- | --- |
| Order | 4 |
| Tier | Supporting platform |
| Page type | Technical capability portfolio |
| Canonical slug | /work/advanced-materials-characterisation |
| Internal page title | Advanced Materials Characterisation & Scientific Instrumentation |

## Objective within the portfolio

Demonstrate breadth, technical responsibility, method-selection judgement, cross-technique interpretation, troubleshooting, traceable laboratory practice and knowledge transfer.

## Main message

David selects and combines complementary techniques to connect morphology, composition, structure and functional properties into defensible R&D conclusions.

## Priority audiences

- Core facilities and research infrastructures
- Scientific-instrumentation companies
- Advanced-materials and semiconductor teams
- Application-scientist and characterisation roles
- Quality, failure-analysis and multidisciplinary R&D groups

## In-page navigation groups

Evidence chain → Experience framework → Characterisation domains → Workflows → Applications → Laboratory reliability

## Unique components

- Integrated capability overview
- Three-level experience framework
- Cross-technique workflow cards
- Selected-application cards
- Responsive capability matrix
- Laboratory reliability flow

## Approved assets and placement

| Asset | Type | Placement | Caption |
| --- | --- | --- | --- |
| assets/sw-04/materials-characterisation-overview.png | Conceptual capability overview | After Hero and Capability Snapshot as the page’s primary visual anchor. | Integrated overview of cross-technique materials characterisation, linking morphology, structure, composition, functional properties and laboratory workflows into one interpretation framework. |

## Implementation observations

- No additional real-photo gallery is required in the initial implementation.
- Do not use stock laboratory images or unauthorised NASA/ESA logos.
- Experience levels are categories of responsibility, not a better-to-worse ranking.
- Keep EPR and NMR outside the main capability matrix because the current experience is theoretical.
- Avoid repeating full AFM, biosensor and thermoelectric narratives; cross-link to SW-01, SW-02 and SW-03 instead.

## Project acceptance criteria

- The page does not read as a catalogue of instruments.
- Core expertise, applied experience and technical training remain visibly distinct.
- The capability matrix is a table on desktop and grouped cards on mobile.
- SOPs, traceability and junior-user training are presented as substantive professional capabilities.
- The integrated overview figure can be enlarged and is captioned as a conceptual synthesis.

## Definitive approved content

Tarjeta para Selected Work
Category

Materials Characterisation · Metrology · Scientific Instrumentation

Title

Advanced Materials Characterisation & Scientific Instrumentation

Card description

Cross-technique characterisation and experimental method development across nanomaterials, semiconductors, biosensors, polymers and optical systems—from nanoscale imaging and spectroscopy to transport properties, data interpretation and laboratory workflows.

Proof points

Nanoscale to bulk characterisation
Structure, composition and functional properties
Method development and troubleshooting
SOPs, traceability and user training

Technologies

AFM · SEM–EDX · XRD · Raman · Transport Metrology · Thermal Analysis

Status

Multidisciplinary technical capability portfolio

CTA

Explore the characterisation platform

3. Página interna en inglés lista para copiar
Advanced Materials Characterisation & Scientific Instrumentation
Cross-technique methods, experimental workflows and technical support for multidisciplinary R&D

Understanding a material rarely depends on a single measurement.

A surface may appear uniform at one scale and heterogeneous at another. A crystalline phase may be present without producing the expected electrical behaviour. A functional layer may have the correct composition but an unsuitable morphology, or a promising analytical signal may originate from an artefact rather than from the intended material response.

At IMN-CNM, CSIC, I work across advanced characterisation, nanoscale metrology and scientific instrumentation to help research teams answer these questions.

My experience covers nanomaterials, semiconductors, biosensors, thermoelectric materials, polymers, optical coatings and biological interfaces.

The work spans the complete characterisation process:

define the experimental question
→ select complementary techniques
→ prepare and adapt the sample
→ acquire and validate the data
→ identify artefacts and limitations
→ integrate the evidence
→ communicate the result
→ support the next R&D decision

The objective is not simply to generate data, but to produce evidence that remains technically defensible across techniques, samples and research disciplines.

Capability snapshot

Research environment
Instituto de Micro y Nanotecnología, IMN-CNM, CSIC

Core domains
Surface morphology · Crystal structure · Spectroscopy · Elemental composition · Electrical transport · Thermal transport · Thermal analysis

Materials and systems
Nanomaterials · Semiconductors · Biosensors · Thermoelectrics · Polymers · Optical coatings · Biological interfaces

Experimental contribution
Measurement strategy · Sample preparation · Instrument operation · Method adaptation · Troubleshooting · Data analysis · Technical reporting

Laboratory contribution
SOPs · Equipment records · Traceable workflows · User guidance · Junior-researcher training

Data and automation
Python-assisted processing · Quantitative image analysis · Curve fitting · Comparison workflows · Figure generation

Characterisation as an evidence chain

Each technique answers a different part of the material question.

Morphology

What does the surface or structure look like?

Composition

Which elements or chemical species are present?

Structure

Which crystalline phases, orientations or molecular vibrations can be identified?

Properties

How does the material transport charge, heat or mechanical stress?

Function

Does the constructed material perform as expected within the intended device or application?

A defensible interpretation is normally produced by combining these levels:

morphology + composition + structure + properties + application context

For example, an increase in surface roughness may be consistent with the deposition of a functional layer, but topography alone does not identify its chemistry. Elemental or spectroscopic evidence is required to support the interpretation.

Similarly, the presence of the expected crystalline phase does not guarantee suitable electrical conductivity, thermal transport or mechanical integrity.

My role

My work begins by identifying what the research team needs to determine.

The initial question may concern:

surface coverage;
roughness;
aggregation;
defects;
film thickness;
elemental distribution;
crystalline phase;
molecular structure;
chemical modification;
electrical conductivity;
carrier concentration;
thermal transport;
mechanical integrity;
functional stability.

I then evaluate the sample and the practical constraints of the experiment.

This includes:

sample dimensions;
substrate;
expected morphology;
conductivity;
fragility;
vacuum compatibility;
thermal stability;
possible contamination;
spatial resolution required;
whether the measurement must be destructive or non-destructive.

From this assessment, I select or recommend a combination of techniques, adapt the preparation and measurement conditions, acquire the data and evaluate whether the result is representative.

My contribution commonly includes:

experimental planning;
sample preparation;
autonomous instrument operation;
method adaptation;
acquisition-parameter selection;
calibration and consistency checks;
artefact identification;
quantitative analysis;
comparison between sample regions;
cross-technique interpretation;
scientific figure preparation;
technical reporting;
discussion with the research team;
development or refinement of SOPs;
training of junior users.

My role is to connect the research question with the most appropriate measurement strategy and to translate the resulting data into conclusions that can guide the next experimental step.

Experience framework

The techniques in this portfolio are classified according to the level of practical responsibility.

Core expertise

Independent operation, method adaptation, complete data analysis and interpretation

Atomic Force Microscopy
Scanning Electron Microscopy
Energy-Dispersive X-ray Spectroscopy
X-ray Diffraction
Raman spectroscopy
FTIR spectroscopy
Hall-effect measurements
Electrical conductivity and resistivity
Seebeck measurements
NanoTR
PicoTR
Laser Flash Analysis
Differential Scanning Calorimetry
Thermogravimetric Analysis
Applied project experience

Hands-on use in defined research and development applications

Focused Ion Beam
Tensile testing
Bending tests
Compression tests
Cyclic voltammetry
Electrochemical impedance spectroscopy
Technical training and supervised experience

Formal training, supervised operation and data interpretation

Transmission Electron Microscopy
X-ray Photoelectron Spectroscopy
HPLC–MS
ICP–MS
X-ray Absorption Fine Structure spectroscopy

The classification is intended to communicate technical depth accurately.

It distinguishes routine autonomous work from project-specific use and supervised experience without treating every technique as an equivalent specialisation.

Characterisation domains
Surface and nanoscale morphology
Atomic Force Microscopy

AFM provides three-dimensional topographical information at the micro- and nanoscale.

I use it to study:

surface morphology;
roughness;
particle or flake height;
nanoscale defects;
aggregation;
coating evolution;
material coverage;
biological and functional interfaces;
successive processing stages.

The acquisition strategy is adapted to the sample rather than applying a single standard protocol.

Scan size, probe, feedback parameters and processing criteria are selected according to the roughness, fragility and information required.

Multiple regions are measured when surface heterogeneity makes a single image insufficient.

Scanning Electron Microscopy

SEM provides morphological information over a wider field of view and at different length scales.

Applications include:

film continuity;
particle and grain morphology;
pores and cellular structures;
nanowalls and nanowires;
coating defects;
cracks;
cross-sectional structure;
material distribution;
pre- and post-process comparison.

SEM and AFM are often used together.

SEM establishes the larger morphological context, while AFM provides local topography and height-related information.

Energy-Dispersive X-ray Spectroscopy

EDX provides local elemental information associated with the SEM measurement.

I use it to:

identify expected elements;
detect contamination;
compare different regions;
evaluate elemental distribution;
support layer identification;
examine changes between fabrication stages;
correlate morphology and composition.

EDX is interpreted according to interaction volume, substrate contribution, spatial resolution and the limitations of light-element detection.

Focused Ion Beam

My applied FIB experience includes its use in defined projects requiring local material removal, cross-sectional access or preparation of regions of interest.

I treat FIB as a complementary project technique rather than as one of my principal daily-operation platforms.

Transmission Electron Microscopy

My TEM experience is based on technical training and supervised use.

I understand its role in resolving internal nanostructure, lattice information, defects and interfaces at resolutions beyond SEM and AFM, as well as the importance of sample preparation and electron-beam effects.

Crystal structure and phase analysis
X-ray Diffraction

I independently operate and analyse XRD measurements for:

phase identification;
crystal-structure assessment;
preferred orientation;
comparison with reference patterns;
detection of secondary phases;
crystallinity evaluation;
structural comparison between processing conditions.

The measurement geometry is selected according to whether the sample is a powder, film, coating or structured material.

Interpretation considers substrate peaks, texture, peak overlap, sample thickness and detection limits.

XRD establishes crystalline structure, but it is combined with microscopy, spectroscopy or transport measurements when the research question concerns functional performance.

X-ray Absorption Fine Structure

My XAFS experience is based on formal or supervised technical exposure.

I understand its value for examining local atomic coordination and chemical environment, especially when long-range crystallinity is insufficient or absent.

It is included as complementary technical knowledge rather than independent routine expertise.

Vibrational and molecular spectroscopy
Raman spectroscopy

I use Raman spectroscopy to investigate:

material identification;
vibrational modes;
crystalline quality;
phase changes;
stress or strain-related shifts;
defects;
temperature-dependent behaviour;
electrochemical or functional-cell configurations;
comparison between processing conditions.

Measurement conditions must be adapted to avoid:

laser-induced heating;
photochemical modification;
fluorescence interference;
local damage;
signals dominated by the substrate.

Laser wavelength, power, objective, integration time and spectral range are selected according to the sample and expected response.

FTIR spectroscopy

FTIR is used to examine:

molecular vibrations;
functional groups;
polymer composition;
chemical modification;
organic layers;
degradation;
interactions between material components.

Interpretation includes consideration of sample thickness, background, atmospheric contributions, substrate absorption and the limitations of assigning complex overlapping bands.

X-ray Photoelectron Spectroscopy

My XPS experience is based on supervised use and technical training.

I understand its application to surface elemental composition, oxidation state, chemical bonding and contamination analysis, as well as the importance of charging, calibration, sampling depth and peak fitting.

Chemical and elemental analysis
HPLC–MS

My HPLC–MS experience is based on technical training and supervised practice.

I understand the relationship between chromatographic separation and mass-spectrometric identification, including its application to complex molecular mixtures, retention behaviour and compound-specific detection.

ICP–MS

My ICP–MS experience is also based on supervised technical work.

I understand its role in sensitive elemental quantification, together with the importance of digestion, standards, blanks, matrix effects and contamination control.

These techniques are included to demonstrate my ability to work with and interpret data from chemical-analysis specialists, not as claims of routine independent instrument ownership.

Electrical and thermoelectric transport

My core transport-metrology experience includes:

electrical conductivity;
resistivity;
Hall effect;
carrier concentration;
carrier mobility;
carrier type;
Seebeck coefficient;
comparison between measurement directions;
contact and geometry evaluation;
repeated and time-dependent measurements.

These measurements are used to connect the material’s structure and processing history with its functional behaviour.

Particular attention is given to:

contact resistance;
sample thickness;
current path;
substrate contribution;
in-plane and out-of-plane geometry;
signal stability;
temperature drift;
consistency between repeated acquisitions.

Transport characterisation is described in greater depth in the dedicated thermoelectric-materials portfolio case.

Thermal transport and thermal analysis
NanoTR and PicoTR

NanoTR and PicoTR are used to investigate heat transport in thin films, coatings, interfaces and nanostructured materials.

The analysis considers:

sample thickness;
substrate;
multilayer geometry;
interface effects;
measurement model;
sensitivity to the fitted parameters.
Laser Flash Analysis

LFA provides thermal-diffusivity information for materials and geometries suitable for bulk or through-thickness measurement.

Its interpretation may be combined with density and heat-capacity information to examine thermal conductivity.

Differential Scanning Calorimetry

DSC is used to investigate thermal events such as:

glass transitions;
melting;
crystallisation;
curing;
phase changes;
enthalpy-related processes.
Thermogravimetric Analysis

TGA is used to examine:

thermal stability;
decomposition;
volatile content;
oxidation;
residual mass;
multi-stage degradation.

Together, DSC and TGA help distinguish structural transitions from processes involving mass loss or degradation.

Mechanical and electrochemical methods
Mechanical testing

My applied project experience includes tensile, bending and compression tests.

I use mechanical measurements to understand:

stiffness;
strength;
deformation;
failure;
response to repeated bending;
interaction between mechanical load and functional properties.

The flexible-thermoelectric work provides a more advanced example in which mechanical deformation was combined with electrical, thermal and morphological characterisation.

Cyclic voltammetry

CV has been used in defined projects to examine electrochemical behaviour, redox processes and suitable operating conditions.

Electrochemical impedance spectroscopy

EIS has been applied to evaluate frequency-dependent electrical response and contributions associated with interfaces, resistance and capacitance.

These electrochemical techniques complement my work on biosensors, functional electrodes and Raman-compatible electrochemical configurations.

Cross-technique workflows
Nanomaterial and thin-film workflow

SEM
to determine distribution, continuity and larger-scale morphology

AFM
to measure local topography, roughness and nanoscale height

EDX
to support elemental identification

XRD
to determine phase and crystalline orientation

Raman or FTIR
to examine vibrational or chemical information

Electrical or thermal transport
to determine whether the structure produces the intended functional response

Functional semiconductor workflow

SEM and EDX
for morphology and elemental composition

XRD and Raman
for crystal phase and structural quality

Hall measurements
for carrier type, concentration and mobility

Conductivity and Seebeck
for electrical and thermoelectric response

NanoTR, PicoTR or LFA
for heat-transport-related properties

This workflow connects material fabrication with device-relevant performance.

Biosensor-interface workflow

AFM and SEM
for topography and surface evolution

EDX
for complementary elemental evidence

Raman, FTIR or fluorescence
when molecular or optical information is required

Electrochemistry
for functional signal validation

The objective is to establish an evidence chain rather than assigning complete interface construction from a single image.

Polymeric-material workflow

SEM
for pores, cells, walls and internal morphology

FTIR or Raman
for molecular composition and processing-related changes

DSC and TGA
for transitions and thermal stability

LFA or related thermal methods
for heat transport

Mechanical testing
for strength, stiffness and deformation

This combination connects polymer formulation and cellular structure with thermal and mechanical properties.

Selected characterisation applications
Polymeric nanocellular materials

I have contributed to the thermal, morphological and mechanical study of nanocellular polymeric materials, including PMMA- and PVC-based systems.

The characterisation strategy connected:

cellular morphology;
polymer formulation;
thermal behaviour;
heat transport;
mechanical response.

These materials required a different approach from inorganic thin films.

The relevant length scales extended from nanoscale or microscale cellular features to bulk thermal and mechanical properties.

Methods
SEM · FTIR/Raman · DSC · TGA · Thermal transport · Mechanical testing · Data analysis

Capability demonstrated
Connecting complex polymer morphology with functional bulk behaviour.

Optical coatings and far-ultraviolet mirrors

AFM and SEM were applied to high-precision optical surfaces, coatings and mirror-related components within research collaborations involving organisations such as NASA and ESA.

The analysis focused on:

surface topography;
nanoscale roughness;
defects;
particles;
coating uniformity;
comparison between processing conditions.

These properties can influence scattering, reflectivity and the performance of optical surfaces in demanding ultraviolet applications.

My contribution centred on the characterisation evidence and its technical interpretation, rather than on the design or performance of the complete optical system.

Methods
AFM · SEM · Surface roughness · Defect analysis · Comparative imaging · Technical reporting

Capability demonstrated
Applying nanoscale surface metrology to high-precision optical components.

Raman-compatible electrochemical cell

Raman spectroscopy was applied within a project involving an electrochemical-cell configuration.

The measurement required coordination between:

optical access;
electrode geometry;
electrochemical operation;
laser focus;
acquisition conditions;
sample stability;
spectral interpretation.

The work involved adapting the Raman measurement to experimental constraints and evaluating whether useful spectra could be acquired without introducing excessive heating, damage or interference.

Where electrochemical measurements were required, Raman data could be considered alongside cyclic-voltammetry or impedance information.

Methods
Raman spectroscopy · Electrochemical-cell configuration · Cyclic voltammetry · EIS · Spectral analysis

Capability demonstrated
Adapting spectroscopy to a non-standard functional measurement environment.

X-ray diffraction in an ExoMars-related context

I have used XRD in research activities associated with instrumentation work related to ESA’s ExoMars programme.

The contribution focused on structural and phase characterisation, reference comparison and interpretation of diffraction data within a demanding instrumentation-development context.

The work demonstrates how a laboratory characterisation method can contribute to projects where:

measurement traceability;
phase identification;
reference materials;
reproducibility;
technical documentation

are especially important.

Methods
XRD · Phase identification · Crystallographic analysis · Reference comparison · Technical documentation

Capability demonstrated
Structural characterisation within high-reliability scientific-instrumentation research.

Method adaptation and troubleshooting

Real research samples rarely match ideal instrument assumptions.

A significant part of my work involves resolving limitations such as:

insufficient sample size;
excessive roughness;
non-conductive surfaces;
fragile films;
complex substrates;
unusual sample geometry;
weak signal;
fluorescence background;
charging;
contamination;
contact instability;
thermal drift;
heterogeneous regions;
limited vacuum compatibility;
destructive-preparation risks.

The response depends on the scientific priority.

Possible adaptations include:

changing scan or acquisition conditions;
selecting a different measurement scale;
adjusting sample mounting;
using complementary techniques;
preparing cross sections;
modifying contacts;
changing optical power;
measuring several regions;
using reference samples;
repeating the experiment under controlled conditions;
revising the interpretation when the evidence is insufficient.

A technically successful measurement is not merely one that produces an image or curve. It is one whose origin, limitations and representativeness can be explained.

Data analysis and technical reporting

Instrument output is not the final scientific result.

I process and interpret datasets using instrument software, image-analysis tools and Python workflows.

My analysis work includes:

image levelling and correction;
segmentation;
height and roughness extraction;
particle or feature measurements;
line profiles;
spectra preprocessing;
baseline correction;
peak identification;
diffraction-pattern comparison;
curve fitting;
linear regression;
electrical-transport calculations;
thermal-data processing;
uncertainty and consistency checks;
comparison between samples;
figure and table generation.

Python is particularly useful for repetitive datasets and transport measurements.

Automated routines help apply consistent criteria across files and reduce differences caused by manual processing.

The resulting outputs are prepared for:

research meetings;
technical reports;
conference contributions;
scientific publications;
internal decision-making;
user training.
Laboratory workflows and quality practices

Reliable characterisation depends on more than the instrument itself.

I contribute to laboratory practices that improve traceability, consistency and knowledge transfer.

This includes:

standard operating procedures;
equipment logs;
maintenance and incident records;
measurement templates;
sample identification;
file organisation;
acquisition metadata;
processing criteria;
user instructions;
cleaning and start-up procedures;
consistent reporting formats.

These practices are described as:

ISO 9001-aligned documentation and workflow practices

rather than as a claim of formal responsibility for laboratory certification.

The objective is to make measurements more reproducible and reduce the dependence of the laboratory on undocumented individual knowledge.

Training and knowledge transfer

I train junior researchers in both instrument operation and scientific interpretation.

Training can include:

basic measurement principles;
sample preparation;
equipment start-up and shutdown;
safe operation;
acquisition strategy;
parameter selection;
recognition of common artefacts;
data processing;
file organisation;
limitations of the technique;
responsible interpretation;
reporting requirements.

The objective is not only to teach which buttons to press.

Users should understand what the instrument measures, what can distort the result and which conclusions are justified by the evidence.

This approach supports:

safer operation;
fewer invalid measurements;
better use of instrument time;
more consistent datasets;
greater technical independence among junior researchers.
Capability matrix
Domain	Techniques	Experience level	Main information
Nanoscale topography	AFM	Core expertise	Topography, roughness, height, nanoscale defects
Electron microscopy	SEM–EDX	Core expertise	Morphology, cross sections, elemental information
Crystal structure	XRD	Core expertise	Phases, orientation, crystallinity
Vibrational spectroscopy	Raman, FTIR	Core expertise	Molecular and lattice vibrations, chemical changes
Electrical transport	Hall, conductivity, resistivity	Core expertise	Carrier type, concentration, mobility, charge transport
Thermoelectric transport	Seebeck	Core expertise	Voltage response to temperature gradients
Thermal transport	NanoTR, PicoTR, LFA	Core expertise	Thermal diffusivity and transport-related properties
Thermal analysis	DSC, TGA	Core expertise	Transitions, stability, decomposition, mass loss
Local preparation	FIB	Applied experience	Cross-sectional access and local modification
Mechanical properties	Tensile, bending, compression	Applied experience	Strength, stiffness, deformation and failure
Electrochemistry	CV, EIS	Applied experience	Redox behaviour and interfacial electrical response
High-resolution microscopy	TEM	Technical training	Internal structure, lattice and interfaces
Surface chemistry	XPS	Technical training	Surface composition and chemical states
Molecular analysis	HPLC–MS	Technical training	Separation and molecular identification
Trace elemental analysis	ICP–MS	Technical training	Sensitive elemental quantification
Local atomic environment	XAFS	Technical training	Coordination and local chemical environment

EPR and NMR are not included in the primary matrix because the current experience is theoretical rather than experimental.

What this portfolio demonstrates
Technical depth

Independent responsibility across several major characterisation platforms.

Technical breadth

Ability to work from nanoscale morphology to electrical, thermal and mechanical properties.

Method selection

Understanding of which technique is appropriate for each scientific question.

Cross-technique interpretation

Ability to combine evidence rather than relying on isolated signals.

Instrument adaptation

Experience dealing with non-standard samples and experimental geometries.

Scientific communication

Conversion of complex datasets into clear figures, reports, discussions and decisions.

Laboratory reliability

Contribution to SOPs, traceability and consistent workflows.

Technical leadership

Training of junior researchers in operation, analysis and interpretation.

Broader relevance

The capabilities in this portfolio are transferable to:

Semiconductor research and manufacturing

Thin films, defects, phases, carrier transport, interfaces and process comparison.

Scientific instrumentation

Method development, calibration, application support and troubleshooting.

Functional materials

Connection between fabrication, structure and electrical, thermal or mechanical performance.

Energy materials

Transport properties, thermal behaviour and electrochemical response.

Flexible electronics

Morphology, contacts, mechanical deformation and functional reliability.

Medical devices and biosensors

Surface modification, nanoscale interfaces, molecular characterisation and electrochemical validation.

Optical systems

Surface roughness, coating defects, particles and high-precision component analysis.

Core facilities and research infrastructures

Instrument operation, user training, SOPs, sample workflows and technical reporting.

Failure analysis and quality control

Combination of morphology, composition, structure and properties to investigate unexpected performance.

Final perspective

Advanced characterisation is not a catalogue of instruments.

It is a process of selecting the right evidence, understanding the limitations of each measurement and combining different datasets into a coherent interpretation.

A material becomes scientifically understandable when its morphology, composition, structure and functional properties can be connected through a reliable experimental workflow.

My work supports that connection—from nanoscale imaging and spectroscopy to transport metrology, thermal analysis, method development and laboratory knowledge transfer.

4. Estructura visual recomendada
Hero visual

Debe mostrar una muestra central conectada con cuatro dimensiones de evidencia:

Morphology: AFM y SEM.
Structure and chemistry: XRD, Raman y FTIR.
Composition: EDX y otras técnicas químicas.
Properties: transporte eléctrico, térmico y mecánico.
Mensaje visual

One sample · multiple techniques · one integrated interpretation

Caption

Combining morphology, composition, structure and functional properties to support multidisciplinary R&D.

No utilizaría una composición con veinte iconos de equipos. Debe comunicar integración, no acumulación.

Figura 1 — From question to decision

Research question
→ Sample assessment
→ Technique selection
→ Measurement and validation
→ Cross-technique analysis
→ Technical conclusion
→ R&D decision

Esta debe ser la figura conceptual principal.

Figura 2 — Evidence chain

Cuatro paneles alrededor de una misma muestra:

Morphology

AFM height map + SEM image.

Composition

EDX elemental map.

Structure

XRD pattern + Raman spectrum.

Properties

Conductivity, Seebeck or thermal curve.

En el centro:

Integrated material interpretation

Figura 3 — Experience levels

Una representación sencilla con tres niveles:

Core expertise

Independent operation and complete analysis.

Applied experience

Hands-on project use.

Technical training

Supervised operation and interpretation.

No lo representaría como una escala de “mejor a peor”, sino como tres tipos de responsabilidad técnica.

Figura 4 — Selected applications

Cuatro tarjetas:

Nanocellular polymers.
Optical coatings and far-UV mirrors.
Raman-compatible electrochemical cell.
ExoMars-related XRD work.

Cada tarjeta debe mostrar:

Una imagen.
La pregunta experimental.
Dos o tres técnicas.
La capacidad demostrada.

No utilizaría logos de NASA o ESA salvo que su uso esté autorizado y el contexto sea públicamente verificable.

Figura 5 — Laboratory reliability

Un diagrama secundario:

SOPs
→ equipment records
→ traceable acquisition
→ consistent analysis
→ user training
→ reproducible evidence

Material visual real

Priorizaría:

AFM de alta calidad.
SEM y EDX de la misma muestra.
Un difractograma limpio.
Un espectro Raman.
Una curva de transporte.
Una imagen del polímero nanocelular.
Una superficie óptica.
Una fotografía o esquema de configuración especial.

Las imágenes deben incluir captions que expliquen:

Qué se midió.
Qué información produjo.
Por qué fue relevante.
5. SEO editorial
Slug recomendado

/work/advanced-materials-characterisation

SEO title

Advanced Materials Characterisation & Metrology | David López Diego

Meta description

Cross-technique materials characterisation combining AFM, SEM-EDX, XRD, spectroscopy, transport metrology, thermal analysis and laboratory workflows.

Open Graph title

Advanced Materials Characterisation & Scientific Instrumentation

Open Graph description

From nanoscale morphology and crystal structure to electrical, thermal and mechanical performance across multidisciplinary R&D.

Main keyword

advanced materials characterisation

Secondary keywords
materials characterisation scientist
scientific instrumentation
cross-technique characterisation
AFM characterisation
SEM EDX analysis
XRD analysis
Raman spectroscopy
thermal analysis
transport metrology
materials testing
nanoscale metrology
laboratory workflows
instrument user training
semiconductor characterisation
functional materials analysis
Structured data

Usaría CollectionPage como esquema principal porque la página reúne múltiples capacidades y aplicaciones.

Puede contener elementos hasPart de tipo:

CreativeWork para las aplicaciones.
DefinedTerm para los dominios técnicos.
HowTo únicamente si se publican workflows educativos reales.
Person para tu perfil.
Organization para IMN-CNM, CSIC.

Campos recomendados:

name
description
author
about
keywords
hasPart
associatedMedia
contributor
dateCreated
dateModified

# SW-05 — Engineering Mixed-Matrix Membranes for Gas Separation

| Field | Approved value |
| --- | --- |
| Order | 5 |
| Tier | Secondary |
| Page type | Master’s materials-research case study |
| Canonical slug | /work/mixed-matrix-membranes-gas-separation |
| Internal page title | Engineering Mixed-Matrix Membranes for Gas Separation |

## Objective within the portfolio

Show an earlier but complete materials-research cycle spanning formulation, processing, characterisation, transport measurement and structure-performance interpretation.

## Main message

David fabricated and characterised Matrimid-PPN mixed-matrix membranes, connecting polymer-filler interfaces and stability with selective gas-transport performance.

## Priority audiences

- Polymer and membrane R&D
- Gas separation and carbon-capture teams
- Barrier and filtration materials
- Environmental and energy materials
- Materials characterisation recruiters

## In-page navigation groups

Separation challenge → Material design → Characterisation → Gas transport → Results → Contribution

## Unique components

- Full-width project overview figure
- Permeability/selectivity metric cards
- Time-lag explanation
- Structure-performance interpretation
- Master’s-project status block

## Approved assets and placement

| Asset | Type | Placement | Caption |
| --- | --- | --- | --- |
| assets/sw-05/mixed-matrix-membranes-overview.png | Integrated project overview | After Project Snapshot and before The Separation Challenge. | Overview of the mixed-matrix membrane study, connecting Matrimid-PPN material design, solution-diffusion transport, fabrication, multi-technique characterisation and gas-separation performance. |

## Implementation observations

- The overview is information-dense and must support accessible enlargement.
- Retain separate metric cards for +180% CO2 permeability, +110% CO2/CH4 selectivity and five gases evaluated.
- Do not describe filler dispersion as perfectly uniform or the improvement as universal across gas pairs.
- Keep the failed/rejected 15 wt% DSC glass-transition measurement visible as a scientific limitation.
- Review embedded image text before publishing; correct any typographic labels without changing the scientific message.

## Project acceptance criteria

- The page is more compact than the three primary projects.
- Visitors understand the permeability-selectivity trade-off.
- The workflow from formulation to functional gas testing is clear.
- Headline results are visible in responsive metric cards, not only inside the image.
- Morphology, stability and transport are integrated into one interpretation rather than isolated technique descriptions.

## Definitive approved content

Tarjeta para Selected Work
Category

Polymer Membranes · Gas Separation · Materials Characterisation

Title

Engineering Mixed-Matrix Membranes for Gas Separation

Card description

Design and characterisation of Matrimid-based mixed-matrix membranes containing microporous polymer networks. The project connected membrane fabrication, filler dispersion and thermal–mechanical stability with selective transport of CO₂, CH₄ and other permanent gases.

Proof points

Up to 180% higher CO₂ permeability
Five gases evaluated
15 and 30 wt% porous filler
Structure-to-performance analysis

Technologies

Membrane Casting · SEM · BET · XRD · FTIR · DSC/TGA · Gas Permeation

Status

Master’s thesis research project

CTA

Explore the membrane study

3. Página interna en inglés lista para copiar
Engineering Mixed-Matrix Membranes for Gas Separation
Connecting polymer–filler interactions with structural stability and selective gas transport

Polymer membranes can separate gases using compact equipment and without requiring a phase change.

Their effectiveness, however, depends on a difficult balance.

A membrane must allow the target gas to pass through at a useful rate while restricting other gases. Increasing permeability can reduce selectivity, while improving selectivity can limit throughput.

For my Master’s thesis in Physics, I investigated whether a microporous polymer network could improve the gas-transport performance of Matrimid® 5218, a commercial aromatic polyimide used in membrane research.

Mixed-matrix membranes were prepared by incorporating 15 and 30 wt% of a porous polymer network into the Matrimid matrix.

The resulting materials were evaluated through structural, molecular, thermal, mechanical and gas-permeation measurements.

The objective was to determine whether the porous filler could improve gas transport while preserving sufficient compatibility, stability and mechanical integrity for membrane operation.

Project snapshot

Project type
Master’s thesis in Materials Physics

Material system
Matrimid® 5218 polyimide with 1,3,5-TPB–TFAP porous polymer network

Membrane compositions
Pure Matrimid · Matrimid with 15 wt% PPN · Matrimid with 30 wt% PPN

Fabrication method
Solution casting followed by controlled thermal and vacuum drying

Gases evaluated
Helium · Oxygen · Nitrogen · Methane · Carbon dioxide

Structural characterisation
SEM · XRD · FTIR · Thickness and density measurements

Thermal characterisation
DSC · TGA

Mechanical characterisation
Uniaxial tensile testing

Functional characterisation
Constant-volume, variable-pressure gas permeation · Time-lag analysis

Transport properties
Permeability · Diffusivity · Solubility · Ideal selectivity

The separation challenge

Gas-separation membranes are selective barriers.

In dense polymer membranes, gas transport generally follows a solution–diffusion mechanism:

Gas molecules dissolve into the high-pressure side of the polymer.
They diffuse through the molecular free volume of the membrane.
They desorb from the low-pressure side.

The permeability of a gas therefore depends on two contributions:

Solubility, describing its affinity for the polymer.
Diffusivity, describing how readily it moves through the polymer structure.

A membrane must also discriminate between different gases.

This creates the central permeability–selectivity trade-off: materials that permit faster transport do not necessarily provide better separation.

The project focused particularly on gas pairs relevant to carbon-dioxide and methane separation, while also examining oxygen, nitrogen and helium transport.

Why mixed-matrix membranes?

Pure polymer membranes are relatively easy to manufacture and can provide useful mechanical properties.

Their performance is nevertheless constrained by the structure and free volume of the polymer chains.

Mixed-matrix membranes attempt to overcome this limitation by incorporating a porous or selective filler into a continuous polymer phase.

The filler may:

introduce additional transport pathways;
increase accessible free volume;
interact preferentially with specific gases;
modify diffusion or solubility;
improve permeability without a proportional loss of selectivity.

This strategy introduces new risks.

Poor particle dispersion, aggregation, sedimentation or weak polymer–filler adhesion can generate non-selective voids and reduce reproducibility.

The interface between the continuous polymer and dispersed particles therefore becomes as important as the properties of either material individually.

Material strategy
Matrimid® 5218

Matrimid was selected as the continuous phase.

It is an aromatic polyimide capable of forming dense films with useful thermal, chemical and mechanical properties.

It also provides a well-studied reference matrix for comparing new gas-separation materials.

Porous polymer network

The filler was a 1,3,5-triphenylbenzene–trifluoroacetophenone porous polymer network, abbreviated as 1,3,5-TPB–TFAP PPN.

The PPN was selected because of its:

microporous structure;
affinity for carbon dioxide;
thermal and chemical stability;
compatibility potential with organic polymer matrices.

Nitrogen adsorption–desorption measurements produced BET surface areas of approximately 319 and 326 m²/g for replicate PPN samples, supporting its microporous character.

Membrane fabrication

Three membrane formulations were studied:

Pure Matrimid.
Matrimid with 15 wt% PPN.
Matrimid with 30 wt% PPN.

The membranes were prepared by solution casting using tetrahydrofuran as the solvent.

For the mixed-matrix formulations, the PPN was dispersed through prolonged stirring and controlled probe sonication before being combined with the polymer solution.

The suspensions were cast onto levelled glass surfaces and subjected to a staged drying process.

Successive thermal and vacuum treatments were used to reduce residual solvent and stabilise the membranes.

Thickness was measured at 50 positions within the effective membrane area. The resulting films had thicknesses in the approximate range of 60–100 μm.

Controlling dispersion, drying and thickness was essential because each factor could influence the apparent gas-transport response.

From formulation to functional testing

The experimental workflow connected the different levels of the material:

PPN porosity
→ particle dispersion
→ polymer–filler interface
→ membrane structure
→ thermal and mechanical stability
→ gas permeability and selectivity

No single measurement was sufficient to evaluate the membrane.

For example, higher permeability could arise from beneficial porous transport pathways, but it could also originate from defects or non-selective interfacial voids.

Microscopy, spectroscopy, thermal analysis and mechanical testing were therefore needed to interpret the gas-permeation results.

Morphology and filler distribution

SEM was used to examine:

the PPN morphology;
membrane surfaces;
cryofractured cross sections;
particle distribution;
polymer–filler adhesion;
possible defects and interfacial voids.

Pure Matrimid showed a relatively uniform and dense microstructure.

Adding PPN increased surface roughness and introduced visible filler regions within the polymer matrix.

The particles were reasonably integrated at both concentrations, but the distribution was not completely uniform through the membrane thickness.

Cross-sectional images indicated some asymmetry, potentially associated with particle sedimentation during casting and drying.

Possible interfacial voids were also observed around some filler regions.

These features were important because they could contribute both to increased permeability and to reductions in selectivity for certain gas pairs.

The membranes did not behave as ideal, perfectly homogeneous composites. Their gas transport reflected both the porous filler and the real polymer–particle interface created during fabrication.

Structural and molecular characterisation
X-ray diffraction

XRD patterns showed the broad diffraction feature expected for amorphous Matrimid.

The addition of PPN did not generate major changes in the overall amorphous character of the membranes.

The result indicated that the filler was incorporated without producing a large-scale crystalline transformation of the polymer matrix.

FTIR spectroscopy

FTIR spectra retained the principal absorption bands associated with the polyimide.

Small band shifts and changes in spectral width were observed as the PPN concentration increased.

These differences supported the presence of the filler and possible changes in the local molecular environment, although several PPN-related bands overlapped with the stronger Matrimid signals.

Thermal behaviour
Thermogravimetric analysis

All membrane formulations showed good thermal stability up to approximately 450 °C.

The principal decomposition process occurred close to 500 °C.

The decomposition onset increased slightly from approximately 490 °C for pure Matrimid to 495 °C and 497 °C for the membranes containing 15 and 30 wt% PPN, respectively.

The PPN-containing membranes also showed slightly lower mass loss during the main degradation process.

These differences indicated a modest improvement in thermal stability after filler incorporation.

Differential scanning calorimetry

Pure Matrimid showed a glass-transition temperature close to 300 °C.

The membrane containing 30 wt% PPN showed a slightly higher value, around 308 °C.

This increase was interpreted as evidence consistent with reduced polymer-chain mobility and interaction between the PPN particles and the Matrimid matrix.

A reliable glass-transition value was not obtained for the 15 wt% membrane because of an instrumental problem during that measurement.

This limitation should remain visible in the scientific record rather than being replaced by an estimated value.

Mechanical performance

The membranes were evaluated through uniaxial tensile testing.

Eight samples were tested for each mixed-matrix formulation.

The incorporation of PPN reduced the Young’s modulus, tensile strength and elongation at break relative to the reference behaviour of Matrimid.

Young’s modulus values of approximately 1.53 GPa and 1.44 GPa were obtained for the membranes containing 15 and 30 wt% PPN, respectively.

The lower value at higher filler concentration was consistent with increased particle aggregation and less effective stress transfer between the dispersed and continuous phases.

Despite the reduction, the membranes retained sufficient mechanical integrity for gas-permeation testing.

Gas-permeation measurements

Gas transport was studied using a constant-volume, variable-pressure permeation system.

The membrane separated a high-pressure gas chamber from an initially evacuated low-pressure chamber.

As gas permeated through the membrane, the pressure increase on the low-pressure side was recorded over time.

The resulting curves were analysed using the time-lag method to calculate:

permeability;
diffusivity;
solubility;
ideal selectivity.

Five pure gases were evaluated:

He;
O₂;
N₂;
CH₄;
CO₂.

Helium measurements at several pressures were also used as a quality check for possible pinholes or macroscopic defects.

A strong pressure dependence would have indicated that a membrane was unsuitable for reliable separation measurements.

Main transport results

Adding the porous polymer network increased permeability for all five gases.

The largest improvement was observed for carbon dioxide.

CO₂ permeability

Compared with pure Matrimid:

the 15 wt% PPN membrane showed an increase of approximately 111%;
the 30 wt% PPN membrane showed an increase of approximately 180%.
Helium permeability

The increase was approximately:

65% for the 15 wt% formulation;
88% for the 30 wt% formulation.
CO₂/CH₄ selectivity

The ideal selectivity increased by approximately:

100% for the 15 wt% formulation;
110% for the 30 wt% formulation.
He/CH₄ selectivity

The ideal selectivity increased by approximately:

50% for the 15 wt% formulation;
35% for the 30 wt% formulation.

The CO₂/N₂ selectivity was broadly retained with a modest reduction, while O₂/N₂ separation became less favourable after filler incorporation.

The PPN did not improve every gas pair equally. Its main value appeared in transport processes involving CO₂, CH₄ and He.

Interpreting the improvement

The increased permeability was associated with the incorporation of the highly porous PPN and the resulting changes in membrane free volume and diffusion pathways.

However, the microscopy results showed that the complete explanation was more complex.

Potential contributing factors included:

intrinsic transport through the PPN;
increased diffusivity;
polymer-chain packing changes;
local interfacial free volume;
filler distribution;
limited aggregation;
possible non-selective void formation.

The increase in both CO₂ permeability and CO₂/CH₄ selectivity indicated that the PPN did more than create random defects.

Its microporosity and affinity for carbon dioxide likely contributed to the improved separation behaviour.

At the same time, the reduction in O₂/N₂ performance demonstrated that adding a porous filler does not automatically improve every separation problem.

Permeability–selectivity assessment

The gas-transport results were compared using Robeson-type permeability–selectivity plots.

These diagrams provide a common framework for evaluating whether higher permeability is obtained at the expense of selectivity.

For CO₂/CH₄ and He/CH₄, the mixed-matrix membranes moved towards more favourable regions of the performance space.

The main result was therefore not simply that more gas passed through the membrane.

The PPN-containing membranes increased the transport rate while maintaining or improving discrimination for selected gas pairs.

This distinction is essential when evaluating a gas-separation material.

My contribution

This project was completed as my Master’s thesis in Physics.

My work covered the complete experimental and analytical workflow, including:

preparation of Matrimid solutions;
dispersion and sonication of PPN suspensions;
membrane fabrication by casting;
staged thermal and vacuum drying;
thickness and density measurements;
sample preparation for characterisation;
SEM analysis of fillers, surfaces and cross sections;
XRD measurements and interpretation;
FTIR measurements and spectral analysis;
DSC and TGA analysis;
mechanical-property evaluation;
operation and analysis of gas-permeation experiments;
time-lag calculations;
calculation of permeability, diffusivity, solubility and selectivity;
comparison using Robeson diagrams;
interpretation of structure–property relationships;
preparation of figures, discussion and the complete thesis report.

The project required connecting each characterisation result with the functional behaviour of the membrane rather than treating the techniques as independent measurements.

What the project demonstrates
End-to-end materials research

Progression from material formulation to functional performance.

Polymer processing

Preparation of dense films and mixed-matrix membranes through solution casting and controlled drying.

Dispersion engineering

Management of particle suspension, sonication and polymer–filler integration.

Multimodal characterisation

Combination of microscopy, spectroscopy, diffraction, thermal analysis and mechanical testing.

Transport analysis

Extraction of permeability, diffusivity, solubility and ideal selectivity from time-dependent pressure measurements.

Critical interpretation

Recognition that permeability gains may originate from both beneficial porosity and undesirable interface defects.

Scientific communication

Preparation of a structured research report integrating theory, experimental methodology, data and conclusions.

Transferable value

The capabilities demonstrated in this project are relevant beyond gas-separation membranes.

Carbon capture and gas purification

Development of materials with preferential CO₂ transport.

Polymer composites

Understanding filler dispersion, adhesion and processing effects.

Barrier materials

Evaluation of molecular transport through films and coatings.

Filtration and separation technologies

Relationship between membrane structure and selective transport.

Packaging and protective coatings

Control of gas transmission and polymer stability.

Energy and environmental materials

Characterisation of materials for purification, recovery and emissions-related applications.

Quality and process development

Detection of sedimentation, interfacial voids, thickness variation and processing defects.

Skills demonstrated
Membrane fabrication
Solution casting
Polymer dissolution
Particle dispersion
Probe sonication
Controlled drying
Vacuum treatment
Film handling
Thickness mapping
Materials characterisation
SEM
XRD
FTIR
BET analysis
DSC
TGA
Density measurement
Tensile testing
Gas-transport analysis
Constant-volume permeation
Variable-pressure measurements
Time-lag analysis
Permeability
Diffusivity
Solubility
Ideal selectivity
Robeson diagrams
Data and research
Experimental planning
Comparative analysis
Error identification
Structure–property interpretation
Scientific plotting
Technical writing
Literature review
Thesis preparation
Final perspective

Mixed-matrix membranes are not improved simply by adding a porous material to a polymer.

Performance depends on whether the filler is dispersed, whether it interacts with the matrix and whether the resulting interface produces selective transport rather than uncontrolled defects.

This project demonstrated that the 1,3,5-TPB–TFAP porous polymer network could substantially increase gas permeability in Matrimid membranes.

The strongest improvements were obtained for carbon dioxide and for CO₂/CH₄ separation, while thermal stability and sufficient mechanical integrity were retained.

The project connected material formulation, interface quality and multi-technique characterisation with measurable gas-separation performance.

4. Estructura visual recomendada
Hero

La imagen principal debe representar el concepto completo:

Membrana polimérica.
Partículas porosas integradas.
Mezcla gaseosa entrando.
CO₂ atravesando preferentemente.
CH₄ o N₂ parcialmente retenido.
Una transición visual desde microestructura hasta separación.
Caption

Mixed-matrix membrane combining a selective polymer phase with a microporous filler to enhance gas transport.

Figura 1 — Material design

Un esquema sencillo:

Matrimid matrix

microporous PPN particles
→ mixed-matrix membrane

Mostrar tres formulaciones:

0% PPN.
15% PPN.
30% PPN.

La fotografía real de la página 22 es útil porque muestra el cambio físico entre las tres membranas.

Figura 2 — Solution–diffusion mechanism

Representar:

sorption
→ diffusion through the membrane
→ desorption

Añadir una segunda ruta atravesando una partícula PPN.

El mensaje debe ser conceptual, no una reproducción de todas las ecuaciones de la memoria.

Figura 3 — Experimental workflow

Formulation
→ dispersion and sonication
→ casting
→ controlled drying
→ characterisation
→ gas permeation
→ performance assessment

Figura 4 — Evidence chain

Cuatro paneles:

Morphology

SEM surface and cross section.

Molecular and structural evidence

XRD and FTIR.

Stability

DSC, TGA and tensile testing.

Function

Time-lag curve and permeability–selectivity plot.

Figura 5 — SEM comparison

Usaría una composición web específica con:

Matrimid surface.
15% PPN surface.
30% PPN surface.
One representative cross section.

La figura debe señalar:

increasing roughness;
filler regions;
distribution through the matrix;
potential interfacial voids;
possible depth asymmetry.

No conviene describir la dispersión como perfectamente uniforme.

Figura 6 — Main performance results

Tres tarjetas:

+180%

Maximum CO₂-permeability increase.

+110%

Maximum CO₂/CH₄-selectivity increase.

5 gases

He, O₂, N₂, CH₄ and CO₂ evaluated.

Figura 7 — Qualitative performance map

Mostrar tres puntos:

Pure Matrimid.
15 wt% PPN.
30 wt% PPN.

Con una flecha hacia mayor permeabilidad y selectividad para CO₂/CH₄.

Para la web puede simplificarse el diagrama de Robeson, manteniendo la figura científica completa como imagen ampliable.

5. SEO editorial
Slug recomendado

/work/mixed-matrix-membranes-gas-separation

SEO title

Mixed-Matrix Membranes for Gas Separation | David López Diego

Meta description

Design and multi-technique characterisation of Matrimid–PPN membranes achieving up to 180% higher CO₂ permeability for selective gas separation.

Open Graph title

Engineering Mixed-Matrix Membranes for Gas Separation

Open Graph description

A complete materials project connecting polymer processing, porous fillers and gas-transport performance.

Main keyword

mixed-matrix membranes for gas separation

Secondary keywords
Matrimid mixed-matrix membranes
CO₂ separation membranes
polymer membranes
porous polymer networks
gas permeability
gas selectivity
CO₂ CH₄ separation
membrane characterisation
time-lag permeation
polymer composite membranes
gas transport in polymers
Structured data

Usaría CreativeWork.

Campos recomendados:

name
description
author
about
keywords
educationalLevel
dateCreated
associatedMedia
citation
isPartOf

También puede indicarse que fue un Thesis o ScholarlyArticle cuando el esquema utilizado admita esa clasificación.

# SW-06 — Independent Data & Software Projects

| Field | Approved value |
| --- | --- |
| Order | 6 |
| Tier | Secondary |
| Page type | Independent computational-project portfolio |
| Canonical slug | /work/independent-data-software-projects |
| Internal page title | Independent Data & Software Projects |

## Objective within the portfolio

Close Selected Work by demonstrating self-directed computational growth, scientific-data automation, SQL analytics and user-facing software prototyping without displacing the primary scientific identity.

## Main message

David uses Python, SQL and lightweight software tools to turn repetitive scientific analysis, structured data and manual reporting into more reproducible and usable workflows.

## Priority audiences

- Scientific-computing and laboratory-automation teams
- Hybrid science-data roles
- R&D groups building internal analytical tools
- STEM recruiters valuing Python and SQL
- Application-scientist and research-engineering teams

## In-page navigation groups

Featured automation → Software prototype → Analytics projects → Development progression → Skills → Links

## Unique components

- Featured AFM automation card
- Mobile-app screenshot gallery
- Three compact analytics cards
- Development-progression flow
- Conditional external-link group

## Approved assets and placement

| Asset | Type | Placement | Caption |
| --- | --- | --- | --- |
| assets/sw-06/davidtrain-dashboard.png | Live prototype screenshot | First image in the Training Assessment and Reporting Tool gallery. | Current Spanish-language mobile dashboard showing the active session, navigation, progress access and recent activity. |
| assets/sw-06/davidtrain-routines.png | Live prototype screenshot | Second image in the Training Assessment and Reporting Tool gallery. | Current Spanish-language routine-management screen with structured workout configuration and editing controls. |
| assets/sw-06/davidtrain-progress.png | Live prototype screenshot | Third image in the Training Assessment and Reporting Tool gallery. | Current Spanish-language progress screen with exercise-level metrics, trend visualisation and recent history. |
| assets/sw-06/davidtrain-exercise-logging.png | Live prototype screenshot | Fourth image in the Training Assessment and Reporting Tool gallery. | Current Spanish-language exercise-logging screen with set-level inputs, previous-performance context and save-state feedback. |

## Implementation observations

- Do not add AFM, economic-risk, warehouse or market-basket screenshots in the initial implementation.
- Keep the AFM automation project as the featured computational project, using text and a process flow only.
- Use “Open live prototype”, not “Open live demo”.
- Show the live-app link even though registration is required, with a visible fictitious/non-sensitive data notice.
- Use the general GitHub profile link until individual repositories have strong public READMEs.
- The app screenshots are currently in Spanish; identify them as the current Spanish-language prototype interface.

## Approved external links

- **Open live prototype:** https://davidtrain.vercel.app/
- **View GitHub profile:** https://github.com/davidd817
- **Required notice:** Personal software prototype. Registration may be required. The app should be explored using fictitious or non-sensitive data. It is not a medical, clinical or diagnostic tool.

## Project acceptance criteria

- The page clearly distinguishes scientific automation, software prototyping and exploratory analytics.
- The training application includes a visible non-medical/non-clinical disclaimer and registration notice.
- No Google Sites links appear anywhere.
- Repository buttons are hidden when a specific public repository is not ready.
- Exploratory analytics projects do not claim production deployment or demonstrated commercial impact.

## Definitive approved content

Tarjeta para Selected Work
Category

Data · Automation · Software Prototyping

Title

Independent Data & Software Projects

Card description

Self-directed projects applying Python, SQL and lightweight web development to scientific-data processing, exploratory analytics, automated reporting and interactive software prototypes.

Proof points

Scientific-data automation
Python and SQL workflows
Interactive applications
Automated analysis and reporting

Technologies

Python · SQL · pandas · NumPy · Streamlit · Plotly

Status

Independent learning and development

CTA

Explore the projects

3. Página interna en inglés lista para copiar
Independent Data & Software Projects
Self-directed work in scientific automation, applied analytics and lightweight application development

My scientific work frequently produces datasets that cannot be analysed efficiently through standard instrument software alone.

This led me to learn and apply Python, SQL and web-development tools through a series of independent projects.

The projects range from automating experimental-data processing to exploring business datasets and building simple interactive applications.

They are presented as learning projects and functional prototypes rather than production software or professionally deployed analytical systems.

The common objective is to transform repetitive calculations, complex datasets or manual reporting processes into clearer and more reproducible workflows.

Project snapshot

Main areas
Scientific computing · Data analytics · Workflow automation · Software prototyping

Languages and tools
Python · SQL · pandas · NumPy · SciPy · Streamlit · Plotly

Typical outputs
Processed datasets · Interactive visualisations · Automated reports · Analytical models · Web applications

Development approach
Problem definition · Data preparation · Analysis · Validation · Visualisation · User-facing output

Featured Project
Automated AFM Force-Curve Analysis
Scientific computing for experimental-data processing

AFM force spectroscopy can generate large collections of individual curves.

Processing them manually requires repetitive baseline correction, contact-point identification, region selection, fitting and parameter extraction. Applying these steps manually can also introduce inconsistencies between files or users.

I developed a Python workflow to process multiple AFM force curves using a consistent analytical procedure.

The pipeline includes:

batch file import;
baseline correction;
contact-point identification;
selection of fitting regions;
sliding-fit procedures;
extraction of mechanical parameters;
calculation of stiffness-related values;
indentation analysis;
maximum-force extraction;
automatic figure generation;
consolidated tabular export;
error handling for incomplete or problematic files.

The workflow is designed so that one invalid file does not interrupt an entire processing campaign.

This project converts a repetitive experimental-analysis task into a more consistent, scalable and traceable pipeline.

Technologies

Python · NumPy · pandas · SciPy · Curve fitting · AFM force spectroscopy

Capabilities demonstrated
Scientific-data processing.
Experimental understanding.
Batch automation.
Numerical fitting.
Error handling.
Reproducible analysis.
Automated reporting.
Links

View repository

A separate Google Sites link is not required. The GitHub repository and a concise portfolio explanation should provide the complete public documentation.

Software Prototype
Training Assessment and Reporting Tool
An interactive workflow for structured data collection and automated reporting

This personal project explores how a manual assessment process can be translated into an interactive application.

The application collects structured training and lifestyle information, calculates assessment metrics and organises the results into reports.

The prototype includes:

user-input forms;
calculation rules;
structured result summaries;
interactive visualisations;
data storage;
PDF report generation;
spreadsheet export;
automated document workflows.

The project provided practical experience in connecting interface design, data processing and report generation within a single application.

The objective was to move from isolated calculations to a complete user workflow: data entry, analysis, visualisation and output generation.

Technologies

Python · Streamlit · pandas · Plotly · PDF generation · Spreadsheet automation

Capabilities demonstrated
Application prototyping.
User-flow design.
Data validation.
Automated calculations.
Visual reporting.
Document generation.
Deployment.
Public note

Personal software prototype. It is not a medical diagnostic or clinical decision-support system.

Links

Open live demo
View repository

The live version should eventually provide screenshots, fictitious sample data or a guest demonstration so that visitors can understand the application without supplying personal information.

Additional Analytics Projects
Exploratory Economic Risk Modelling

An exploratory analysis combining historical regional and macroeconomic indicators with temporal features and classification models.

The project investigated whether periods of elevated economic risk could be distinguished in historical data.

The workflow included:

data integration;
temporal feature engineering;
exploratory visualisation;
classification models;
imbalanced-data analysis;
geographic comparison;
model-performance assessment.

This project should be presented as an exploration of predictive modelling, not as a validated forecasting or public early-warning system.

Technologies

Python · pandas · scikit-learn · Time-based features · Classification · Data visualisation

Capabilities demonstrated
Multi-source data integration.
Feature engineering.
Classification.
Temporal reasoning.
Model evaluation.
Critical interpretation.
Public wording

An exploratory modelling project investigating whether historical economic indicators contain useful signals associated with periods of elevated regional risk.

Sales Data Warehouse & Analytics

A learning project combining SQL and Python to analyse sales, product and customer information.

The work included:

connection to a relational database;
data extraction;
table integration;
cleaning and transformation;
temporal sales analysis;
customer segmentation;
RFM analysis;
product-performance metrics;
visual reporting.

The project demonstrates how transactional records can be transformed into structured analytical datasets and decision-oriented metrics.

Technologies

SQL Server · SQLAlchemy · Python · pandas · RFM analysis

Capabilities demonstrated
SQL querying.
Relational-data integration.
Data cleaning.
KPI development.
Customer segmentation.
Analytical reporting.
Public wording

The project illustrates how SQL and Python can be combined to derive product, customer and sales metrics from a relational data warehouse.

It should not claim demonstrated commercial impact because the project was not implemented within a real company.

Market-Basket Analysis

An exploratory analysis of transactional data using frequent-itemset and association-rule methods.

The workflow transformed individual purchase records into baskets and examined product combinations using metrics such as:

support;
confidence;
lift.

The project explored how association rules could be used to identify recurring product combinations and generate hypotheses for recommendations, product placement or promotional analysis.

Technologies

Python · pandas · Apriori · FP-Growth · Association rules

Capabilities demonstrated
Transactional-data preparation.
Basket construction.
Pattern discovery.
Association-rule analysis.
Metric interpretation.
Commercial-data visualisation.
Public wording

An exploratory project applying association-rule mining to identify recurring product combinations and evaluate their potential analytical relevance.

The analysis should distinguish possible applications from demonstrated commercial outcomes.

What these projects demonstrate
Self-directed learning

The tools and methods were learned and applied independently through practical projects.

Scientific automation

The AFM project shows how programming can solve a real experimental-data problem.

Data workflow development

The projects cover data import, cleaning, transformation, modelling, validation and reporting.

Application thinking

The training prototype extends beyond a notebook by integrating interface, calculations, storage and documents.

Critical interpretation

The projects are presented according to their actual level of validation, without describing exploratory models as production systems.

Transferable software skills

The same capabilities can support:

laboratory automation;
instrument-data processing;
R&D dashboards;
quality-control analysis;
scientific reporting;
internal analytical tools;
experimental databases.
Development progression

The projects represent a progression in computational capability:

exploratory notebooks
→ structured analytical workflows
→ reproducible scientific pipelines
→ interactive software prototypes

The strongest connection with my scientific profile lies in using software to extend what can be achieved with experimental instrumentation and conventional analysis packages.

My objective is not to replace scientific understanding with code, but to use code to make scientific analysis more consistent, scalable and accessible.

Technical skills
Data analysis
Python
pandas
NumPy
SciPy
Data cleaning
Feature engineering
Statistical comparison
Curve fitting
Time-series-related analysis
Databases
SQL
SQL Server
SQLAlchemy
Relational-data integration
Query development
Data transformation
Machine learning
Classification
Random forests
Logistic regression
Imbalanced-data assessment
Model-performance metrics
Exploratory validation
Software prototyping
Streamlit
Interactive forms
Plotly visualisations
Session workflows
Automated reporting
PDF generation
Spreadsheet export
Scientific computing
Batch processing
Numerical analysis
Experimental-data pipelines
Error handling
Automated plotting
Traceable parameter extraction
Project links

La sección debería enlazar únicamente:

Repositorios de GitHub seleccionados.
La aplicación desplegada.
El caso científico de AFM relacionado.

No se incluirán enlaces a Google Sites.

Los botones recomendados son:

View repository
Open live demo
Related AFM research

Para los proyectos sin repositorio suficientemente documentado, es preferible no mostrar un botón hasta mejorar su README.

Final perspective

These projects began as a way to learn computational tools independently.

Over time, they evolved from isolated data analyses into more structured workflows, automated scientific pipelines and user-facing software prototypes.

They demonstrate how I approach unfamiliar technical problems: understand the workflow, learn the required tools, build a functional solution and critically evaluate its limitations.

4. Estructura visual
Hero

Una composición sencilla con tres elementos:

Curva de fuerza AFM procesada.
Fragmento de dashboard o aplicación.
Flujo de datos Python/SQL.
Caption

Independent projects connecting scientific data, analytical workflows and lightweight software development.

Featured-project layout

Utilizaría una tarjeta más grande para Automated AFM Force-Curve Analysis.

La tarjeta debería mostrar:

Curva original.
Punto de contacto.
Región ajustada.
Parámetros extraídos.
Tabla consolidada.
Training application

Mostrar tres capturas:

Data entry.
Results dashboard.
Generated report.

No mostrar datos personales reales.

Additional analytics

Tres tarjetas compactas, sin página independiente inicialmente:

Economic risk modelling.
Sales data warehouse.
Market-basket analysis.

Cada una debe incluir solamente:

Una visualización.
Dos frases.
Tecnologías.
Enlace a GitHub cuando esté preparado.
5. SEO
Slug

/projects/independent-data-software

SEO title

Independent Data & Software Projects | David López Diego

Meta description

Self-directed Python, SQL and software projects spanning scientific-data automation, exploratory analytics, reporting and interactive applications.

Open Graph title

Independent Data & Software Projects

Open Graph description

Scientific automation, applied analytics and lightweight software prototypes developed through self-directed learning.

Keywords
scientific data automation
Python scientific computing
AFM force curve analysis
independent data projects
SQL analytics
Streamlit applications
automated scientific reporting
data analysis portfolio

# 10. SEO and metadata

| Project | Canonical slug | Recommended schema |
| --- | --- | --- |
| SW-01 | /work/afm-nanomechanics-extremotolerant-bacteria | CreativeWork |
| SW-02 | /work/nanomaterial-biosensors-molecular-detection | CollectionPage with ScholarlyArticle items in hasPart |
| SW-03 | /work/thermoelectric-materials-metrology | CreativeWork or CollectionPage with two CreativeWork subcases |
| SW-04 | /work/advanced-materials-characterisation | CollectionPage |
| SW-05 | /work/mixed-matrix-membranes-gas-separation | CreativeWork; thesis context in isPartOf |
| SW-06 | /work/independent-data-software-projects | CollectionPage or CreativeWork collection |

Each internal page requires a unique title, meta description, Open Graph title/description/image, canonical URL and structured data. The Open Graph image may use the approved main conceptual visual, except SW-06 where a simple branded composite or screenshot montage is preferable.

# 11. Implementation sequence

- Create project types, per-project data files and the ordered project registry.
- Create shared work components and the section renderer.
- Rebuild the Selected Work landing layout and preserve old-route redirects.
- Implement SW-01 and validate the deepest page/component requirements.
- Implement SW-02 and add publication-specific components.
- Implement SW-03, SW-04, SW-05 and SW-06 using the shared system plus their unique components.
- Copy and optimise all approved assets from this package.
- Add metadata, structured data, related-project links and external-link rules.
- Run responsive, accessibility, content-integrity and performance QA.
- Deploy a Vercel preview before merging to the production branch.

# 12. Global acceptance criteria

- All six projects appear in the approved order and hierarchy.
- Every landing card contains category, title, description, proof points, technologies, status and CTA.
- All canonical project routes work and old routes redirect correctly.
- No Google Sites links are visible.
- All approved images use the package paths, captions, provenance labels and placement rules.
- Conceptual visuals cannot be mistaken for raw experimental data.
- Long pages have usable in-page navigation.
- Tables, matrices, figures, metric cards and galleries work on mobile without horizontal page overflow.
- The global Publications section remains available, while SW-02 reuses its card language for the nine relevant papers.
- Claims and disclosure language match the definitive approved content.
- External links and DOI links work and use descriptive labels.
- The site passes a production build and no project page produces runtime or TypeScript errors.
- A recruiter can identify the problem, David’s role, evidence and transferable value in every project without specialist prior knowledge.

# 13. Pre-publication visual QA checklist

- Review embedded text, units and spellings in every conceptual composite.
- Check SW-01 overview terminology/units against the final page copy.
- Check SW-05 overview for typographic labels and ensure simplified plots are identified as web communication.
- Confirm scientific scale bars remain legible after web optimisation.
- Confirm no personal or sensitive information appears in SW-06 screenshots.
- Verify that the Spanish-language DavidTrain screenshots are accurately described in English captions.
- Confirm all images are approved for public display and do not contain unauthorised third-party logos.