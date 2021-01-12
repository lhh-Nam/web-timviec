import React from "react";
import "./Hotjob.scss";

import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Hotjob() {
  return (
    <div className="hotjob">
      <br />
      <br />
      <br />

      <h2>Việc làm tốt nhất</h2>

      <div className="vertical"></div>
      <br />

      <div className="whitespace"></div>
      <div className="whitespace"></div>

      <div className="test">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>

            <div className="job">
              <div className="job__box">
                <div className="logo">
                  <img
                    src="https://images.vietnamworks.com/pictureofcompany/86/10475262.png"
                    alt=""
                  />
                </div>

                <div className="info">
                  <strong className="info--name">
                    Kỹ Sư Công Nghệ Thông Tin Kỹ Sư Công Nghệ Thông Tin Kỹ Sư
                    Công Nghệ Thông Tin
                  </strong>
                  <p className="info--address">Công Ty JSK - Hồ Chí Minh</p>
                </div>

                <span className="tag-hot">Hot</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hotjob;
