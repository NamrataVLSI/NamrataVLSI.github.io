# Namrata Yadav — Portfolio

Static portfolio site for analog / mixed-signal IC design, custom layout, physical verification,
and physical design roles. Plain HTML, CSS, and a single small JS file — no build step, no framework.

## Structure

```
index.html          Home: hero, explore, technical expertise, education, selected projects
experience.html     Experience cards
projects.html       All 10 projects with category filtering
contact.html        Email, LinkedIn, GitHub, résumé
projects/*.html     One detail page per project
css/styles.css      All styling
js/main.js          Mobile nav, image placeholders, project filter
assets/images/      profile.jpg goes here
assets/projects/    All project screenshots go here
resume/             Namrata_Yadav_Resume.pdf goes here
```

## Adding your images

Any image that is not present yet shows a labelled placeholder with the exact filename it expects.
Drop the file into `assets/projects/` with that name and it appears — no code changes needed.

### Required

| File | What to use |
| --- | --- |
| `assets/images/profile.jpg` | Your photo, square crop, at least 400 × 400 px |
| `resume/Namrata_Yadav_Resume.pdf` | Your résumé |

### Project screenshots (`assets/projects/`)

Landscape crops, roughly 16:9, at least 1200 px wide. Card thumbnails are cropped to 16:9.

| Project | Recommended image | Filename |
| --- | --- | --- |
| LIF neuron | Neuron layout (card thumbnail) | `lif_neuron_layout.png` |
| LIF neuron | Transistor-level schematic | `lif_neuron_schematic.png` |
| LIF neuron | Vmem + spike transient waveform | `lif_spike_waveform.png` |
| LIF neuron | F–I response curve | `lif_fi_response.png` |
| Analog IC | OTA layout with interdigitated pair (card) | `analog_ota_layout.png` |
| Analog IC | Two-stage op-amp schematic | `analog_opamp_schematic.png` |
| Analog IC | DRC/LVS clean summary | `analog_drc_lvs_clean.png` |
| LDO | Full hierarchical layout (card) | `ldo_layout.png` |
| LDO | Schematic with pass device and feedback | `ldo_schematic.png` |
| LDO | Transient response | `ldo_transient.png` |
| LDO | PSRR vs. frequency | `ldo_psrr_plot.png` |
| LDO | Loop gain / phase, phase margin marked | `ldo_loop_stability.png` |
| Bandgap | 5 × 5 common-centroid BJT array (card) | `bandgap_common_centroid_layout.png` |
| Bandgap | Schematic | `bandgap_schematic.png` |
| Mixed-signal | Top-level PLL schematic (card) | `pll_top_level.png` |
| Mixed-signal | PLL layout | `pll_layout.png` |
| Digital custom | Standard-cell library layout (card) | `standard_cell_library.png` |
| Digital custom | Hierarchical block layout | `digital_hierarchical_layout.png` |
| Digital custom | Pre-/post-layout comparison | `digital_pex_postlayout.png` |
| SRAM | 6T array layout (card) | `sram_6t_array.png` |
| SRAM | 6T bitcell schematic | `sram_6t_schematic.png` |
| ALU | ICC2 floorplan (card) | `alu_floorplan.png` |
| ALU | Post-route layout | `alu_routed.png` |
| ALU | PrimeTime timing report | `alu_timing_report.png` |
| Temperature sensor | Temperature sweep graph (card) | `temperature_sensor_sweep.png` |
| Temperature sensor | Schematic | `tempsensor_schematic.png` |
| Temperature sensor | VTH / gm / ID trends | `tempsensor_vth_gm_id.png` |
| Temperature sensor | Monte Carlo distribution | `tempsensor_monte_carlo.png` |
| Temperature sensor | Aging analysis | `tempsensor_aging.png` |
| NN video processing | Architecture / block hierarchy (card) | `nn_video_architecture.png` |
| NN video processing | System-level layout | `nn_video_layout.png` |

Crop out tool licence banners, usernames, and file paths before uploading.

## Publishing on GitHub Pages

1. Create a new **public** repository named `NamrataVLSI.github.io` (this exact name gives you
   `https://namratavlsi.github.io` with no subpath).
2. Upload the contents of this folder — `index.html` must sit at the repository root, not inside
   another folder. Either drag the files into the GitHub web uploader, or from a terminal:

   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/NamrataVLSI/NamrataVLSI.github.io.git
   git push -u origin main
   ```

3. In the repository, go to **Settings → Pages**. Under *Build and deployment*, set **Source** to
   *Deploy from a branch*, **Branch** to `main`, folder `/ (root)`, and click **Save**.
4. Wait one to two minutes, then open `https://namratavlsi.github.io`.

The `.nojekyll` file is already included so GitHub serves the files as-is.

### Custom domain (optional)

1. Buy a domain, then in **Settings → Pages → Custom domain** enter it and save. GitHub writes a
   `CNAME` file to the repository.
2. At your domain registrar, add DNS records:
   - Apex domain (`namratayadav.com`): four `A` records pointing to `185.199.108.153`,
     `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
   - Subdomain (`www.namratayadav.com`): one `CNAME` record pointing to `namratavlsi.github.io`.
3. Back in Settings → Pages, tick **Enforce HTTPS** once the certificate is issued (up to 24 hours).

## Editing content

Text lives directly in the HTML — open the file, find the sentence, change it. No build step.
To change the accent colour, edit `--accent` at the top of `css/styles.css`.
