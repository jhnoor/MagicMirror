FROM hypriot/rpi-node:latest

ENV NODE_ENV production
ENV MM_PORT 80

WORKDIR /opt/magic_mirror

COPY magic_mirror_v2.1.2 .

RUN cp -R modules /opt/magic_mirror/unmount_modules
RUN cp -R config /opt/magic_mirror/unmount_config
RUN npm install --unsafe-perm

COPY docker-entrypoint.sh /opt/magic_mirror
RUN apt-get update \
  && apt-get -qy install dos2unix \
  && dos2unix docker-entrypoint.sh \
  && chmod +x docker-entrypoint.sh

EXPOSE $MM_PORT
CMD ["node serveronly"]
ENTRYPOINT ["/opt/magic_mirror/docker-entrypoint.sh"]
