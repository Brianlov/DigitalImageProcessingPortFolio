import React from 'react';
import ZoomableImage from '../components/ZoomableImage';
import Quiz from '../components/Quiz';
import week1RealIntro from '../assets/week1_dip_intro.jpg';
import week1Gamma from '../assets/week1_gamma_ray.png';
import week1Xray from '../assets/week1_xray.png';
import week1Microwave from '../assets/week1_microwave.png';
import week1Radio from '../assets/week1_radio.png';
import week1Remote from '../assets/week1_remote_sensing.png';
import week1Uv from '../assets/week1_uv.png';
import week1VisIr from '../assets/week1_visible_ir.jpg';
import week2Ai1 from '../assets/week2_ai_1.png';
import week2Ai2 from '../assets/week2_ai_2.png';
import week2Cover from '../assets/week2_cover.png';
import week3Intro from '../assets/week3_intro.jpg';
import week5Intro from '../assets/week5_intro.png';
import week6Intro from '../assets/week6_intro.png';
import week6Cover from '../assets/week6_cover.png';
import week7Intro from '../assets/week7_intro.png';
import week8Intro from '../assets/week8_intro.png';
import week3Histogram from '../assets/week3_histogram.png';
import week3Filters from '../assets/week3_filters.png';
import week4Noise from '../assets/week4_noise_models.png';
import week5Transforms from '../assets/week5_geometric_transforms.png';
import week6ColorModels from '../assets/week6_color_models.png';
import week7Haar from '../assets/week7_haar_transform.png';
import week8Compression from '../assets/week8_compression.png';

export const weeks = [
    {
        id: 1,
        title: "Section 1: Introduction to DIP",
        summary: "Overview of Digital Image Processing fundamentals.",
        details: (
            <div className="space-y-8">
                <div className="space-y-4">

                    <p className="text-slate-900 leading-relaxed text-justify">
                        Digital Image Processing (DIP) is the use of digital computers to process images obtained from various imaging systems.
                        A digital image is a two-dimensional representation made up of pixels, where each pixel stores intensity or color information that can be analyzed mathematically.
                    </p>
                    <p className="text-slate-900 font-medium text-justify">
                        There are several fields in Digital Image Processing:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-2">
                        <h4 className="text-amber-500 font-bold text-center group-hover:text-slate-900 transition-colors">Gamma Ray Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                            <ZoomableImage src={week1Gamma} alt="Gamma Ray Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-amber-500 font-bold text-center group-hover:text-slate-900 transition-colors">X-ray Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                            <ZoomableImage src={week1Xray} alt="X-ray Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-amber-500 font-bold text-center group-hover:text-slate-900 transition-colors">Microwave Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                            <ZoomableImage src={week1Microwave} alt="Microwave Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-amber-500 font-bold text-center group-hover:text-slate-900 transition-colors">Radio Band Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                            <ZoomableImage src={week1Radio} alt="Radio Band Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-amber-500 font-bold text-center group-hover:text-slate-900 transition-colors">Remote Sensing</h4>
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                            <ZoomableImage src={week1Remote} alt="Remote Sensing" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-amber-500 font-bold text-center group-hover:text-slate-900 transition-colors">Ultraviolet Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                            <ZoomableImage src={week1Uv} alt="Ultraviolet Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>

                    <div className="group space-y-2">
                        <h4 className="text-amber-500 font-bold text-center group-hover:text-slate-900 transition-colors">Visible & Infrared Imaging</h4>
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                            <ZoomableImage src={week1VisIr} alt="Visible and Infrared Imaging" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Digital image processing plays a crucial role across a wide range of applications and imaging modalities. In medical imaging, techniques such as gamma-ray imaging (PET and SPECT), X-ray imaging, MRI, and ultrasound enable accurate diagnosis and treatment planning by revealing internal body structures that are invisible to the human eye. In remote sensing, satellite images captured in visible, infrared, microwave, and radio wavelengths help monitor environmental changes, natural disasters, urban development, and climate patterns. Beyond healthcare and earth observation, DIP is also fundamental in astronomy, industrial inspection, security systems, biological imaging, and computer-generated visualization.
                    </p>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        One of the key strengths of digital image processing is its ability to handle images from different parts of the electromagnetic spectrum, as well as non-electromagnetic sources such as acoustic waves and electron beams. Each imaging modality provides unique information, and digital processing techniques allow these images to be enhanced, analyzed, and interpreted efficiently. As computing power and algorithms advance, especially with the integration of artificial intelligence, digital image processing continues to evolve, enabling smarter, faster, and more precise image-based systems.
                    </p>
                </div>

                <Quiz
                    question="What is DIP?"
                    options={[
                        "Capturing images using cameras only",
                        "Processing images using digital computers",
                        "Displaying images on screens",
                        "Compressing images for storage"
                    ]}
                    correctAnswerIndex={1}
                />
            </div>
        ),
        image: week1RealIntro
    },
    {
        id: 2,
        title: "Section 2: AI vs Real Photography",
        summary: "AI-Generated Images vs. Real Photographs: The Blurring Line in 2025.",
        details: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">AI-Generated Images vs. Real Photographs: The Blurring Line in 2025</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        In late 2025, AI-generated images have reached such high quality that they frequently fool casual viewers and even some experts. Traditional photography captures real light from actual scenes, while AI creates entirely synthetic visuals through advanced digital image processing. This rapid progress continues to reshape creativity, trust, and the visual media landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-2">
                        <h4 className="text-amber-500 font-bold text-center group-hover:text-slate-900 transition-colors">ChatGPT Generated</h4>
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                            <ZoomableImage src={week2Ai1} alt="ChatGPT Generated Image" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                    <div className="group space-y-2">
                        <h4 className="text-amber-500 font-bold text-center group-hover:text-slate-900 transition-colors">Gemini Generated</h4>
                        <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                            <ZoomableImage src={week2Ai2} alt="Gemini Generated Image" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                    </div>
                </div>

                <div className="space-y-6">
                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Key Differences in Creation and Nature</h4>
                        <p className="text-slate-900 leading-relaxed text-justify">
                            Real photographs result from light hitting a sensor to record an existing moment. AI-generated images are produced by neural networks that learn statistical patterns from millions of photos and then synthesize new pixels from text prompts. Digital image processing in AI involves diffusion models that gradually refine random noise into coherent pictures.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Cost and Accessibility</h4>
                        <p className="text-slate-900 leading-relaxed text-justify">
                            Professional real photography demands costly gear, locations, models, and editing time. AI image generation requires only a subscription to tools like Midjourney or Flux, with each image created in seconds. This low barrier has made high-quality visuals affordable for everyone.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">Realism & Current Capabilities</h4>
                        <p className="text-slate-900 leading-relaxed text-justify">
                            Today’s best AI models create faces, products, and scenes that appear photorealistic at first glance. Subtle digital processing flaws, such as inconsistent lighting or minor anatomical errors, still reveal many AI images on close inspection. Real photos naturally maintain perfect physical consistency without artificial reconstruction.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-slate-900 mb-2">The Future Outlook</h4>
                        <p className="text-slate-900 leading-relaxed text-justify">
                            Within the next few years, improved diffusion techniques and multimodal training will make AI images virtually indistinguishable from real ones. Watermarking, detection tools, and new regulations will likely emerge to preserve trust in visual content. Hybrid workflows combining real captures with AI enhancement will become the standard in many industries.
                        </p>
                    </div>
                </div>
            </div>
        ),
        image: week2Cover
    },
    {
        id: 3,
        title: "Section 3: Image Enhancement",
        summary: "Techniques for improving image quality: Histogram Equalization, Contrast Stretching, and Filtering.",
        details: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Histogram Equalization</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Histogram equalization is a technique for adjusting image intensities to enhance contrast. It works by effectively spreading out the most frequent intensity values, stretching out the intensity range of the image. This approach usually increases the global contrast of many images, especially when the usable data of the image is represented by close contrast values.
                    </p>
                    <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300 mt-4">
                        <ZoomableImage src={week3Histogram} alt="Histogram Equalization Example" className="w-full object-cover" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Contrast Stretching</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Contrast stretching (often called normalization) is a simple image enhancement technique that attempts to improve the contrast in an image by 'stretching' the range of intensity values it contains to span a desired range of values.
                    </p>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        The key difference between the two is that <strong>Contrast Stretching</strong> is typically a linear operation that simply scales the min-max range of pixel values to fit the full dynamic range (0-255). In contrast, <strong>Histogram Equalization</strong> is a non-linear process that redistributes pixel intensities based on their frequency of occurrence to achieve a uniform histogram. Contrast stretching preserves the relative shape of the histogram, whereas histogram equalization changes it completely to flatten the distribution.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Filter Classification</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Filters in image processing are essential for tasks like noise reduction and edge detection. They can be broadly categorized into two types: <strong>Linear Filters</strong> and <strong>Non-Linear Filters</strong>.
                    </p>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        <strong>Linear Filters</strong>, such as the Mean or Gaussian filter, achieve their effect using a convolution mask (kernel). The value of each output pixel is calculated as a weighted sum of the input pixel values within the neighborhood defined by the mask.
                    </p>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        <strong>Non-Linear Filters</strong>, such as the Median filter, do not rely on arithmetic convolution equations. Instead, they use non-arithmetic operations, often based on ordering or ranking pixel values (e.g., finding the median value in a neighborhood). This makes them particularly effective at removing impulsive noise (like salt-and-pepper noise) while preserving edges better than linear filters.
                    </p>
                </div>

                <div className="space-y-2">
                    <h4 className="text-amber-500 font-bold text-center">Comparison of Filters</h4>
                    <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                        <ZoomableImage src={week3Filters} alt="Linear vs Non-Linear Filters Comparison" className="w-full object-cover" />
                    </div>
                </div>
            </div>
        ),
        image: week3Intro
    },
    {
        id: 4,
        title: "Section 4: Image Restoration",
        summary: "Image degradation types, noise models, denoising techniques, and evaluation methods.",
        details: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Three Types of Degradation</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Image degradation refers to the decline in image quality caused by external factors or environmental conditions. The three primary types are:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-900">
                        <li><strong>Blur:</strong> Caused by relative motion (motion blur) or imperfect focus (defocus blur).</li>
                        <li><strong>Noise:</strong> Random variations in pixel intensities that obscure details.</li>
                        <li><strong>Sensor Artifacts:</strong> Imperfections such as dead pixels or color artifacts.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Types of Noise</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Noise introduces random variations in pixel intensity. Common noise models include:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm text-slate-900 border-collapse">
                            <thead>
                                <tr className="border-b border-slate-200 text-amber-500">
                                    <th className="py-2 px-4">Noise Type</th>
                                    <th className="py-2 px-4">Description</th>
                                    <th className="py-2 px-4">Cause/Occurrence</th>
                                    <th className="py-2 px-4">Visual Impact</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Gaussian Noise</td>
                                    <td className="py-2 px-4">Random noise with a normal (bell-shaped) distribution.</td>
                                    <td className="py-2 px-4">Electronic sensor noise.</td>
                                    <td className="py-2 px-4">Adds graininess to the image.</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Salt & Pepper Noise</td>
                                    <td className="py-2 px-4">Impulse noise with random extreme values (0 or 255).</td>
                                    <td className="py-2 px-4">Communication errors.</td>
                                    <td className="py-2 px-4">Random black and white "snow".</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Speckle Noise</td>
                                    <td className="py-2 px-4">Multiplicative noise proportional to the signal.</td>
                                    <td className="py-2 px-4">Radar and ultrasound imaging.</td>
                                    <td className="py-2 px-4">Creates a grainy texture.</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Poisson Noise</td>
                                    <td className="py-2 px-4">Photon noise following a Poisson distribution.</td>
                                    <td className="py-2 px-4">Low-light images (photon-based).</td>
                                    <td className="py-2 px-4">Variance increases in brighter regions.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300 mt-4">
                        <ZoomableImage src={week4Noise} alt="Noise Models Visualized" className="w-full object-cover" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Image Denoising Techniques</h3>
                    <h4 className="text-lg font-bold text-slate-900">1. Spatial Domain Denoising</h4>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Spatial domain operations manipulate pixel values directly.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-900">
                        <li><strong>Mean Filter (Linear):</strong> Replaces a pixel with the average of its neighbors. Reduces random noise but blurs edges.</li>
                        <li><strong>Median Filter (Non-Linear):</strong> Replaces a pixel with the median value. Highly effective for <strong>Salt & Pepper noise</strong> while preserving edges.</li>
                        <li><strong>Gaussian Filter (Linear):</strong> Uses a weighted average. Reduces high-frequency noise with less edge blurring than a mean filter.</li>
                    </ul>

                    <h4 className="text-lg font-bold text-slate-900 mt-4">2. Frequency Domain Denoising</h4>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Transforms the image to analyze intensity variations as frequencies.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-900">
                        <li><strong>Low-Pass Filter:</strong> Allows low frequencies to pass, smoothing the image and removing high-frequency noise.</li>
                        <li><strong>Band-Stop Filter:</strong> Isolates and removes specific frequency ranges (periodic noise).</li>
                        <li><strong>Wiener Filtering:</strong> Minimizes noise amplification by considering noise characteristics and the image's frequency distribution.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Evaluation Methods</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        <strong>Subjective Evaluation:</strong> Relies on human perception (e.g., Mean Opinion Score). Accurate but expensive.
                    </p>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        <strong>Objective Evaluation:</strong> Uses mathematical metrics for unbiased benchmarking:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-900">
                        <li><strong>MSE (Mean Squared Error):</strong> Average squared difference (lower is better).</li>
                        <li><strong>PSNR (Peak Signal-to-Noise Ratio):</strong> Ratio of max intensity to noise (higher &gt;30dB is better).</li>
                        <li><strong>SSIM (Structural Similarity Index):</strong> Measures structural similarity (closer to 1 is better).</li>
                    </ul>
                </div>
            </div>
        ),
        image: week5Intro
    },
    {
        id: 5,
        title: "Section 5: Geometric Transformations",
        summary: "Affine transformations: Translation, Scaling, Rotation, and Shearing.",
        details: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Geometric transformations are fundamental operations in digital image processing that modify the spatial relationship of pixels to alter an image's arrangement, shape, or orientation. These techniques are essential for applications such as aligning medical scans, correcting distortions in photography, and manipulating objects in augmented reality.
                    </p>
                    <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                        <ZoomableImage src={week5Transforms} alt="Geometric Transformations Example" className="w-full object-cover" />
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-slate-900 leading-relaxed text-justify">
                        A core category of these operations is <strong>Affine Transformation</strong>, a linear mapping method that preserves points, straight lines, and parallelism within an image. By using a 3x3 homogeneous transformation matrix, affine transformations allow various linear operations and translations to be combined and calculated uniformly through matrix multiplication.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Techniques and Details</h3>
                    <ul className="list-disc pl-6 space-y-3 text-slate-900 text-justify">
                        <li><strong>Translation:</strong> Shifts an image spatially along the x and y axes by specified distances. It repositions objects within the frame without altering their shape or size.</li>
                        <li><strong>Scaling:</strong> Resizes an image by expanding (zooming in) or shrinking (zooming out) the pixel grid. It can be uniform (maintaining aspect ratio) or non-uniform.</li>
                        <li><strong>Rotation:</strong> Transforms an image by pivoting it around a specific point, typically the origin or the image center, by a defined angle. Positive angles generally result in counterclockwise rotation.</li>
                        <li><strong>Shearing:</strong> Introduces a skew or slant to the image along a horizontal or vertical axis, often used to correct perspective distortions.</li>
                        <li><strong>Composite Transformation:</strong> sequential application of multiple operations (e.g., Scaling then Rotation) by multiplying their individual matrices. The order of operations matters.</li>
                    </ul>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Implementation in MATLAB</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Practically implemented using the <code>affine2d</code> function to create a geometric transformation object from the matrix, followed by <code>imwarp</code> to apply the spatial mapping. Since these transformations often map pixels to non-integer coordinates, interpolation methods—such as Nearest Neighbor, Bilinear, or Bicubic—are required to estimate new pixel intensity values for a smooth output.
                    </p>
                </div>
            </div>
        ),
        image: week6Intro
    },
    {
        id: 6,
        title: "Section 6: Color Image Processing",
        summary: "Color models and processing: RGB, CMY, and HSV/HSI.",
        details: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                        <ZoomableImage src={week6ColorModels} alt="Color Models Visualization" className="w-full object-cover" />
                    </div>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        A <strong>Color Model</strong> defines how colors are represented as combinations of components, providing a mathematical framework for handling colors in image processing tasks. These models facilitate the specification of colors in a standard way, whether for hardware devices or human perception.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">RGB (Red, Green, Blue)</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        The RGB model is an <strong>additive</strong> color model where Red, Green, and Blue light are added together to reproduce a broad array of colors. It is a hardware-oriented model used primarily for electronic displays, such as monitors and cameras. In a standard 24-bit color image, each pixel is represented by three 8-bit values (0–255) for the Red, Green, and Blue channels, allowing for approximately 16.7 million color combinations.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">CMY (Cyan, Magenta, Yellow)</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        The CMY model is a <strong>subtractive</strong> color model primarily used for color printing. Unlike RGB, which emits light, CMY relies on pigments that subtract light; for example, cyan absorbs red light, magenta absorbs green, and yellow absorbs blue. The components are inversely related to RGB (e.g., C = 1 - R). In practical printing, a fourth component, Black (K), is often added (CMYK) to produce deeper black tones.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">HSV and HSI (Hue, Saturation, Value/Intensity)</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        HSV (Hue, Saturation, Value) and HSI (Hue, Saturation, Intensity) are <strong>perceptual</strong> models designed to be more intuitive for human perception than RGB. They decouple the color information (chrominance) from the brightness (luminance).
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-900">
                        <li><strong>Hue (H):</strong> Represents the dominant color or wavelength (e.g., red, blue).</li>
                        <li><strong>Saturation (S):</strong> Represents the purity of the color.</li>
                        <li><strong>Value (V) / Intensity (I):</strong> Represents the brightness or lightness.</li>
                    </ul>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        These models are widely used in computer vision for tasks like segmentation and object detection because they allow algorithms to process color independently of lighting conditions.
                    </p>
                </div>

                <div className="space-y-4">
                    <h3 className="text-slate-900 font-bold">Comparison of Color Models</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm text-slate-900 border-collapse">
                            <thead>
                                <tr className="border-b border-gray-700 text-amber-500">
                                    <th className="py-2 px-4">Feature</th>
                                    <th className="py-2 px-4">RGB</th>
                                    <th className="py-2 px-4">CMY</th>
                                    <th className="py-2 px-4">HSV / HSI</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Full Name</td>
                                    <td className="py-2 px-4">Red, Green, Blue</td>
                                    <td className="py-2 px-4">Cyan, Magenta, Yellow</td>
                                    <td className="py-2 px-4">Hue, Saturation, Value (or Intensity)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Type</td>
                                    <td className="py-2 px-4">Additive (Light-based)</td>
                                    <td className="py-2 px-4">Subtractive (Pigment-based)</td>
                                    <td className="py-2 px-4">Perceptual (Human-based)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Primary Usage</td>
                                    <td className="py-2 px-4">Electronic displays, cameras, scanners</td>
                                    <td className="py-2 px-4">Color printing</td>
                                    <td className="py-2 px-4">Image analysis, segmentation, human interaction</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Mixing Result</td>
                                    <td className="py-2 px-4">Combining all components creates <strong>White</strong></td>
                                    <td className="py-2 px-4">Combining all components creates <strong>Black</strong> (theoretically)</td>
                                    <td className="py-2 px-4">N/A (Describes properties rather than mixing)</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Relation</td>
                                    <td className="py-2 px-4">Hardware-centric</td>
                                    <td className="py-2 px-4">Inverse of RGB</td>
                                    <td className="py-2 px-4">Decouples color from brightness</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ),
        image: week6Cover
    },
    {
        id: 7,
        title: "Section 7: Wavelets & Other Image Transforms",
        summary: "Multi-resolution processing and the Haar Transform.",
        details: (
            <div className="space-y-6">
                <div className="space-y-4">
                    <p className="text-slate-900 leading-relaxed text-justify">
                        The Haar transform is a simple wavelet transform used in signal and image processing to represent data using averages and differences. It works by pairing samples and computing low-frequency (average) and high-frequency (detail) components, and can be applied repeatedly to obtain a multi-resolution representation.
                    </p>
                    <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300">
                        <ZoomableImage src={week7Haar} alt="Haar Transform Example" className="w-full object-cover" />
                    </div>
                </div>

                <div className="space-y-4">
                    <p className="text-slate-900 leading-relaxed text-justify">
                        For compression, the Haar transform is effective because most important information is concentrated in the low-frequency components, while many high-frequency coefficients are small and can be discarded or heavily quantized, reducing data size with little quality loss.
                    </p>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        In 2D images, the transform produces four subbands: LL (overall structure and smooth regions), LH (vertical details), HL (horizontal details), and HH (diagonal details and noise).
                    </p>
                </div>
            </div>
        ),
        image: week7Intro
    },
    {
        id: 8,
        title: "Section 8: Image Compression",
        summary: "Overview, processing pipeline, and techniques.",
        details: (
            <div className="space-y-8">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">Image Compression Overview</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Image compression is the process of reducing the file size of digital images while maintaining acceptable visual quality. This is achieved by removing <strong>redundancy</strong>—repeated or unnecessary information—to improve storage efficiency and transmission speeds. Compression algorithms exploit three main types of redundancy:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-slate-900">
                        <li><strong>Spatial Redundancy:</strong> Correlation between neighboring pixels.</li>
                        <li><strong>Spectral Redundancy:</strong> Correlation between color channels (e.g., RGB).</li>
                        <li><strong>Psycho-visual Redundancy:</strong> Information that is imperceptible to the human eye.</li>
                    </ul>
                    <div className="rounded-lg overflow-hidden border border-slate-200 shadow-md group-hover:shadow-amber-500/20 transition-all duration-300 mt-4">
                        <ZoomableImage src={week8Compression} alt="Image Compression Visualization" className="w-full object-cover" />
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-amber-500">The Image Compression Flow (Pipeline)</h3>
                    <p className="text-slate-900 leading-relaxed text-justify">
                        Most compression standards, such as JPEG, follow a specific pipeline to reduce data size:
                    </p>
                    <ol className="list-decimal pl-6 space-y-4 text-slate-900 text-justify">
                        <li>
                            <strong>Preprocessing (Color Space Conversion & Subsampling):</strong>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li><strong>RGB to YCbCr:</strong> Separates brightness (Luminance, Y) from color (Chrominance, Cb, Cr).</li>
                                <li><strong>Chroma Subsampling:</strong> Reduces color resolution as the eye is less sensitive to color detail.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Transformation:</strong>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li>Converts image from spatial to frequency domain (e.g., DCT or Wavelet).</li>
                                <li>Concentrates energy into a few coefficients, separating important low frequencies from high-frequency noise.</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Quantization:</strong>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li>Critical for <strong>lossy compression</strong>. Divides coefficients by a matrix and rounds integers.</li>
                                <li>Discards high-frequency info (irreversible).</li>
                            </ul>
                        </li>
                        <li>
                            <strong>Entropy Encoding:</strong>
                            <ul className="list-disc pl-6 mt-1 space-y-1">
                                <li>Lossless compression (Huffman, RLE, etc.) of the quantized data.</li>
                                <li>Assigns shorter codes to frequent patterns.</li>
                            </ul>
                        </li>
                    </ol>
                </div>

                <div className="space-y-4">
                    <h3 className="text-slate-900 font-bold">Comparison: Lossless vs. Lossy Compression</h3>
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm text-slate-900 border-collapse">
                            <thead>
                                <tr className="border-b border-gray-700 text-amber-500">
                                    <th className="py-2 px-4">Feature</th>
                                    <th className="py-2 px-4">Lossless Compression</th>
                                    <th className="py-2 px-4">Lossy Compression</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-800">
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Definition</td>
                                    <td className="py-2 px-4">Reduces size without losing info; perfect reconstruction.</td>
                                    <td className="py-2 px-4">Reduces size by discarding non-essential data.</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Data Integrity</td>
                                    <td className="py-2 px-4">Retains all original data.</td>
                                    <td className="py-2 px-4">Discards some data permanently.</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Compression Ratio</td>
                                    <td className="py-2 px-4">Moderate (e.g., 2:1).</td>
                                    <td className="py-2 px-4">High (e.g., 10:1 to 50:1+).</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Techniques</td>
                                    <td className="py-2 px-4">RLE, Huffman, LZW.</td>
                                    <td className="py-2 px-4">DCT, Wavelet, Quantization.</td>
                                </tr>
                                <tr>
                                    <td className="py-2 px-4 font-medium text-slate-900">Common Formats</td>
                                    <td className="py-2 px-4">PNG, BMP, GIF, TIFF.</td>
                                    <td className="py-2 px-4">JPEG, HEVC.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        ),
        image: week8Intro
    }
];
